import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from '@app/shared';
import { IS_PROD, IS_STAGING } from '@app/shared/config';
import path from 'path';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';

const envFile = IS_PROD
  ? '.env.production'
  : IS_STAGING
    ? '.env.staging'
    : '.env';

console.log(`envFile : ${envFile}`);

const envFilePath = [path.resolve(__dirname, `../../../${envFile}`)];

@Module({
  imports: [
    SharedModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
