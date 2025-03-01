import { IsOptional, IsString } from 'class-validator';

export class SigninDto {
  @IsString()
  socialId: string;

  @IsString()
  username: string;

  @IsString()
  @IsOptional()
  profileImage: string;
}
