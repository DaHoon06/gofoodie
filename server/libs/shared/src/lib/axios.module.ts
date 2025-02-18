import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule,
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          maxRedirects: 1,
          baseURL: `${configService.get('UNISURVEY_API_HOST')}/api`,
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [],
  exports: [HttpModule],
})
export class AxiosModule {}
