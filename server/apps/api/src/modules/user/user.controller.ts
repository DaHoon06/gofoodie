import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SigninDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/sign-in')
  async userVerify(@Body() body: SigninDto) {
    return this.userService.findOneUser(body);
  }
}
