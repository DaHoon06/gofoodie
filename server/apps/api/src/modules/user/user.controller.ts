import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { SigninDto } from './dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/sign-in')
  async userVerify(@Body() body: SigninDto, @Res() res: Response) {
    const payload = await this.userService.findOneUser(body);
    // res.cookie('accessToken', accessToken, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === 'production',
    //   sameSite: 'lax',
    //   maxAge: 60 * 60 * 1000,
    // });

    return res.json(payload);
  }
}
