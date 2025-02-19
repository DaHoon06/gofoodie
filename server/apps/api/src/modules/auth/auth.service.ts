import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayloadDto } from './dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  signJwt(payload: JwtPayloadDto): string {
    const { uniqueId, username, profileImage } = payload;
    const secret =
      this.configService.get<string>('JWT_SECRET') || process.env.JWT_SECRET;
    const token = this.jwtService.sign(
      {
        uniqueId,
        username,
        profileImage,
      },
      {
        secret,
      },
    );

    return token;
  }
}
