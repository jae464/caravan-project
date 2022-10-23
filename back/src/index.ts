import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import express, { Request, Response } from "express";
import bodyParser = require("body-parser");
import userRouter from "./routes/userRouter";
import meetingRoomRouter from "./routes/meetingRoomRouter";
import cors from "cors";
import reservationRouter from "./routes/reservationRouter";
import { meetingRooms } from "./const";
import { MeetingRoom } from "./entity/MeetingRoom";

AppDataSource.initialize()
  .then(async () => {
    console.log("DB Connected");

    // MeetingRoom 정보가 DataBase에 없을 경우 추가
    meetingRooms.forEach(async v => {
      const meetingRoomRepository = AppDataSource.getRepository(MeetingRoom);
      const meetingRoom = await meetingRoomRepository.findOneBy({
        name: v.name,
      });
      if(!meetingRoom) {
        const newMeetingRoom = await meetingRoomRepository.create(v);
        const result = await meetingRoomRepository.save(newMeetingRoom);
        console.log(result);
      }
    })
  })
  .catch((error) => console.log(error));

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.set("port", process.env.PORT || 3000);

// parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("HelloWorld!");
});

// routes
app.use("/users", userRouter);
app.use("/reservation", reservationRouter);
app.use("/meetingroom", meetingRoomRouter);

const server = app.listen(app.get("port"), () =>
  console.log(`App Listening on PORT ${app.get("port")}`)
);
