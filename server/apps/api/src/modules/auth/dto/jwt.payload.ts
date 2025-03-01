import { IsString } from 'class-validator';

export class JwtPayloadDto {
  @IsString()
  socialId: string;

  @IsString()
  username: string;

  @IsString()
  profileImage: string;
}
