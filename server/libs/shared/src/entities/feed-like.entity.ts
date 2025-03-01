import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FeedEntity } from './feed.entity';
import { UserEntity } from './user.entity';

@Entity('FeedLike')
export class FeedLikeEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: number;

  @ManyToOne(() => FeedEntity, (feed) => feed.likes, { onDelete: 'CASCADE' })
  feed: FeedEntity;

  @ManyToOne(() => UserEntity, (user) => user.likeFeeds, {
    onDelete: 'CASCADE',
  })
  user: UserEntity;

  @CreateDateColumn()
  created_at: Date;
}
