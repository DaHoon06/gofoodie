import { Module } from '@nestjs/common';
import { join } from 'path';
import {
  AcceptLanguageResolver,
  I18nModule as I18NModule,
  QueryResolver,
} from 'nestjs-i18n';

@Module({
  imports: [
    I18NModule.forRoot({
      fallbackLanguage: 'ko',
      loaderOptions: {
        path: join(__dirname, '../../../libs/shared/src/modules/i18n/locales/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
  ],
})
export class I18nModule {}
