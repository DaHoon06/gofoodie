import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { LocationEntity } from './location.entity';

@Entity('LocationShowWith')
export class LocationShowWithEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: number;

  // ✅ 장소 (ManyToOne)
  @ManyToOne(() => LocationEntity, (location) => location.showWithUsers, {
    onDelete: 'CASCADE',
  })
  location: LocationEntity;

  // ✅ 공유 대상 사용자 (ManyToOne)
  @ManyToOne(() => UserEntity, (user) => user.sharedLocations, {
    onDelete: 'CASCADE',
  })
  user: UserEntity;
}
