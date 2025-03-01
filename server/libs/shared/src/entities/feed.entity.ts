import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { LocationEntity } from './location.entity';
import { FeedImageEntity } from './feed-image.entity';
import { FeedLikeEntity } from './feed-like.entity';

export enum FeedType {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

// 피드 테이블
@Entity('Feed')
export class FeedEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ enum: FeedType, default: FeedType.PUBLIC })
  mode: FeedType; // 공개 여부

  @Column({ default: false })
  isDeleted: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @UpdateDateColumn()
  deleted_at: Date;

  @ManyToOne(() => UserEntity, (user) => user.feeds, { onDelete: 'CASCADE' })
  user: UserEntity;
  // 1개의 Feed에는 여러 개의 FeedImage (1:N)
  @OneToMany(() => FeedImageEntity, (image) => image.feed)
  images: FeedImageEntity[];
  // 1개의 Feed에는 1개의 Location (1:1)
  @OneToOne(() => LocationEntity, (location) => location._id)
  @JoinColumn()
  location: LocationEntity;
  // 1개의 Feed는 여러 개의 FeedLike를 가질 수 있음 (1:N)
  @OneToMany(() => FeedLikeEntity, (like) => like.feed, { cascade: true })
  likes: FeedLikeEntity[];
}
