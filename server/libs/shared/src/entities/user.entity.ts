import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FriendListEntity } from './friend-list.entity';
import { FeedEntity } from './feed.entity';
import { LocationShowWithEntity } from './location-show-with.entity';
import { FeedLikeEntity } from './feed-like.entity';

// 회원 테이블
@Entity('User')
export class UserEntity extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  _id: string;

  @Column({ type: String, default: '' })
  socialId: string;

  @Column({ type: String, default: '' })
  description: string;

  @Column({ type: String, default: '' })
  nickname: string;

  @Column({ type: String })
  username: string;

  @Column({ type: String, default: '/images/profile.png' })
  profileImage: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // 친구 목록 (내가 친구 요청한 목록)
  @OneToMany(() => FriendListEntity, (friendList) => friendList.user)
  friends: FriendListEntity[];
  // 친구 목록 (나에게 친구 요청이 온 목록)
  @OneToMany(() => FriendListEntity, (friendList) => friendList.friend)
  friendOf: FriendListEntity[];
  // 작성한 피드 목록
  @OneToMany(() => FeedEntity, (feed) => feed.user)
  feeds: FeedEntity[];
  // 공유된 장소 리스트
  @OneToMany(() => LocationShowWithEntity, (showWith) => showWith.user)
  sharedLocations: LocationShowWithEntity[];

  // 1명의 유저는 여러 개의 FeedLike를 가질 수 있음 (1:N)
  @OneToMany(() => FeedLikeEntity, (like) => like.user, { cascade: true })
  likeFeeds: FeedLikeEntity[];
}
