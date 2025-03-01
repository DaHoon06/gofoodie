import { FeedEntity } from '@app/shared/entities/feed.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class FeedRepository extends Repository<FeedEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(FeedEntity, dataSource.createEntityManager());
  }
}
