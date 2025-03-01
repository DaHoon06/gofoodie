import { FeedLikeEntity } from '@app/shared/entities/feed-like.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class FeedLikeRepository extends Repository<FeedLikeEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(FeedLikeEntity, dataSource.createEntityManager());
  }
}
