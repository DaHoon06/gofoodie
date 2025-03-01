import { FriendListEntity } from '@app/shared/entities/friend-list.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class FriendListRepository extends Repository<FriendListEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(FriendListEntity, dataSource.createEntityManager());
  }
}
