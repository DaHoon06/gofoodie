import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayloadDto } from '@app/shared/dto/auth/jwt.payload.dto';

export const User = createParamDecorator(
  (data, ctx: ExecutionContext): JwtPayloadDto => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
