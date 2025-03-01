import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';
import { FeedRepository } from './feed.repository';
import { FeedLikeRepository } from './feed-like.repository';
import { FeedImageRepository } from './feed-image.repository';

@Module({
  imports: [],
  controllers: [FeedController],
  providers: [
    FeedService,
    FeedRepository,
    FeedLikeRepository,
    FeedImageRepository,
  ],
  exports: [],
})
export class FeedModule {}
