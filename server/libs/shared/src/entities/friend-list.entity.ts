import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

export enum FriendStatus {
  PENDING = 'pending', // 대기
  ACCEPTED = 'accepted', // 승낙
  REJECTED = 'rejected', // 거절
}

// 친구 목록
@Entity('FriendList')
export class FriendListEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: number;
  // 친구 요청을 한 사용자
  @ManyToOne(() => UserEntity, (user) => user.friends, { onDelete: 'CASCADE' })
  user: UserEntity;
  // 친구로 추가된 사용자
  @ManyToOne(() => UserEntity, (user) => user.friendOf, { onDelete: 'CASCADE' })
  friend: UserEntity;

  @Column({ type: 'enum', enum: FriendStatus, default: FriendStatus.PENDING })
  status: FriendStatus;
}
