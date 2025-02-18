import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('healthy-check')
  appHealthyCheck() {
    return 'say hello';
  }
}
