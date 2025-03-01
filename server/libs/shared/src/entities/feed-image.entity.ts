import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FeedEntity } from './feed.entity';

// 피드 이미지 관리 테이블
@Entity('FeedImage')
export class FeedImageEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  originUrl: string;

  @Column()
  imageUrl: string;

  @Column()
  size: string;

  @Column()
  format: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => FeedEntity, (feed) => feed.images, { onDelete: 'CASCADE' })
  feed: FeedEntity;
}
