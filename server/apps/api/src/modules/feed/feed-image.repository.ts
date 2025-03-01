import { FeedImageEntity } from '@app/shared/entities/feed-image.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class FeedImageRepository extends Repository<FeedImageEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(FeedImageEntity, dataSource.createEntityManager());
  }
}
