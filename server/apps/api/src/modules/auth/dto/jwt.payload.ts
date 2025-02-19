import { IsString } from 'class-validator';

export class JwtPayloadDto {
  @IsString()
  uniqueId: string;

  @IsString()
  username: string;

  @IsString()
  profileImage: string;
}
