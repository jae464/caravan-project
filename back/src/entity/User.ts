import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reservation } from './Reservation';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeNumber: number;

  @Column()
  password: string;

  @Column()
  name: string;

  @OneToMany(() => Reservation, reservation => reservation.id, {
    cascade: true,
  })
  reservation: Reservation[];
}
