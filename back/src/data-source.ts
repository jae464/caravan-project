import "reflect-metadata";
import { DataSource } from "typeorm";
import { MeetingRoom } from "./entity/MeetingRoom";
import { Reservation } from "./entity/Reservation";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "12341234",
  database: "caravan-project",
  synchronize: true,
  logging: false,
  entities: [User, MeetingRoom, Reservation],
  migrations: [],
  subscribers: [],
});
