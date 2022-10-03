import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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
    // @Column()
    // firstName: string

    // @Column()
    // lastName: string

    // @Column()
    // age: number

}
