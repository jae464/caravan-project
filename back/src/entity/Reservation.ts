import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { MeetingRoom } from "./MeetingRoom";
import { User } from "./User";

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  meetingDate: Date;

  @Column()
  startTime: number;

  @Column()
  endTime: number;

  @ManyToMany(() => User)
  @JoinTable()
  atendees: User[];

  @ManyToOne(() => MeetingRoom, (meetingRoom) => meetingRoom.id, {
    cascade: true,
  })
  meetingRoom: MeetingRoom;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
