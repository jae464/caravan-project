import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reservation } from './Reservation';

@Entity()
export class MeetingRoom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  floor: number;

  @Column()
  name: string;

  @Column()
  isTv: boolean;

  @Column()
  isProjector: boolean;

  @Column()
  isVideoConference: boolean;

  @Column()
  capacity: number;

  @OneToMany(() => Reservation, reservation => reservation.id, {
    cascade: true,
  })
  reservation: Reservation[];
}
