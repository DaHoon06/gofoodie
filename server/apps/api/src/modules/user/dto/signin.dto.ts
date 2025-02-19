import { IsOptional, IsString } from 'class-validator';

export class SigninDto {
  @IsString()
  uniqueId: string;

  @IsString()
  username: string;

  @IsString()
  @IsOptional()
  profileImage: string;
}
