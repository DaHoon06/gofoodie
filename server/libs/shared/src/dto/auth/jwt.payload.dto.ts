import { ROLE } from '@app/shared/enums/role.enum';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class JwtPayloadDto {
  @IsString()
  userName: string;
  @IsString()
  userId: string;
  @IsString()
  objectId: string;
  @IsEnum(ROLE)
  role: ROLE;
  @IsNumber()
  iat: number;
  @IsNumber()
  exp: number;
}
