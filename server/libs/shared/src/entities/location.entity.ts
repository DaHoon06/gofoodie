import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FeedEntity } from './feed.entity';
import { LocationShowWithEntity } from './location-show-with.entity';

export enum MarkerType {
  DEFAULT = 'default',
}

@Entity('Location')
export class LocationEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  locationName: string;

  @Column()
  sido: string;

  @Column()
  sigungu: string;

  @Column()
  dong: string;

  @Column()
  lon: number;

  @Column()
  lat: number;

  @Column({ default: true })
  showMap: boolean;

  @Column({ enum: MarkerType, default: MarkerType.DEFAULT })
  markerType: MarkerType;

  @Column()
  markerImage: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => FeedEntity, (feed) => feed.location)
  feed: FeedEntity;

  @OneToMany(() => LocationShowWithEntity, (showWith) => showWith.location)
  showWithUsers: LocationShowWithEntity[];
}
