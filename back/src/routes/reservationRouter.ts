import express, { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { MeetingRoom } from "../entity/MeetingRoom";
import { Reservation } from "../entity/Reservation";
import { User } from "../entity/User";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  // console.log('test')
  const reservations = await AppDataSource.getRepository(Reservation).find();
  res.json(reservations);
});

router.delete("/:id", async (req: Request, res: Response) => {
  // console.log('test')
  console.log(req.params.id);
  const reservations = await AppDataSource.getRepository(Reservation).delete({ id: Number(req.params.id) });
  res.json(reservations);
});

router.post('/', async(req: Request, res: Response) => {
  console.log(req.body.roomId);
  const meetingRoomRepository = AppDataSource.getRepository(MeetingRoom);
  const reservationRepository = AppDataSource.getRepository(Reservation);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {id: req.body.userId}
  });

  const room = await meetingRoomRepository.findOne({
    where: {id: req.body.roomId}
  });

  console.log(room);

  // const reservation = await reservationRepository.create(req.body);
  const reservation = new Reservation()
  reservation.name = req.body.name;
  reservation.meetingRoom = room;
  reservation.meetingDate = req.body.meetingDate;
  reservation.startTime = req.body.startTime;
  reservation.endTime = req.body.endTime;
  reservation.user = user;

  const result = await reservationRepository.save(reservation);
  return res.json(result);
});

router.put('/', async(req: Request, res: Response) => {
  console.log('put')
  console.log(req.body);
  const meetingRoomRepository = AppDataSource.getRepository(MeetingRoom);
  const reservationRepository = AppDataSource.getRepository(Reservation);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {id: req.body.userId}
  });

  const room = await meetingRoomRepository.findOne({
    where: {id: req.body.roomId}
  });

  console.log(room);

  // const reservation = await reservationRepository.create(req.body);
  // const reservation = new Reservation()
  // reservation.name = req.body.name;
  // reservation.meetingRoom = room;
  // reservation.meetingDate = req.body.meetingDate;
  // reservation.startTime = req.body.startTime;
  // reservation.endTime = req.body.endTime;
  // reservation.user = user;

  const result = await reservationRepository.update(
    {
      id:Number(req.body.id),
    },
    {
      name: req.body.name,
      meetingRoom: room,
      meetingDate: req.body.meetingDate,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      user: user
    }
  );
  return res.json(result);
})

export default router;
