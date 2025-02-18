import { Controller, Get, Param } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor() {}
  @Get('/user-verify/:id')
  async userVerify(@Param('id') id: string) {
    console.log(id);
  }
}
