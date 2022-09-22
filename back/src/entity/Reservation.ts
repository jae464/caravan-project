import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  meetingRoom: string;

  @Column()
  meetingDate: string;

  @Column()
  meetingTime: string;

  @Column()
  attendees: string;
}
