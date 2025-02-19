import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserRepository } from './user.repository';
import { UserEntity } from '@app/shared/entities/user.entity';
import { CreateUserDto, SigninDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    private readonly authService: AuthService,
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(body: CreateUserDto) {
    const { username, uniqueId, profileImage } = body;
    const profile = profileImage ? profileImage : null;
    const user = UserEntity.create({
      username,
      uniqueId,
      profileImage: profile,
    });
    return this.userRepository.createUser(user);
  }

  async findOneUser(body: SigninDto) {
    const { uniqueId } = body;
    let user = await this.findOneByUniqueId(uniqueId);

    // 사용자가 없으면 신규 회원 가입
    if (!user) {
      user = await this.createUser(body);
    }

    const token = this.authService.signJwt({
      uniqueId,
      username: user.username,
      profileImage: user.profileImage,
    });

    return {
      accessToken: token,
      uniqueId,
      username: user.username,
      profileImage: user.profileImage,
    };
  }

  async findOneByUniqueId(uniqueId: string): Promise<UserEntity> {
    return this.userRepository.findOneBy({ uniqueId });
  }
}
