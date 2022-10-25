import express, { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { MeetingRoom } from '../entity/MeetingRoom';
import { Reservation } from '../entity/Reservation';
import { User } from '../entity/User';
import moment from 'moment';
const router = express.Router();

router.get('/:id', async (req: Request, res: Response) => {
  const reservations = await AppDataSource.getRepository(Reservation).find({
    relations: {
      meetingRoom: true,
      user: true,
      // atendees: true
    },
  });

  let result = reservations.map(reserv =>
    reserv.user.id == Number(req.params.id)
      ? {
          id: reserv.id,
          name: reserv.name,
          meetingDate: reserv.meetingDate,
          startTime: reserv.startTime,
          endTime: reserv.endTime,
          // atendees: reserv.atendees,
          meetingRoomId: reserv.meetingRoom.id,
          userId: reserv.user.id,
        }
      : null
  );

  result = result.filter(v => v);

  result.sort((a: any, b: any) => {
    return a.meetingDate!.valueOf() - b.meetingDate!.valueOf();
  });

  res.json(result);

  // console.log(result)
});

router.delete('/:id', async (req: Request, res: Response) => {
  // console.log('test')
  console.log(req.params.id);
  const reservations = await AppDataSource.getRepository(Reservation).delete({
    id: Number(req.params.id),
  });
  res.json(reservations);
});

router.patch('/', async (req: Request, res: Response) => {
  console.log('patch');
  console.log(req.body);
  const meetingRoomRepository = AppDataSource.getRepository(MeetingRoom);
  const reservationRepository = AppDataSource.getRepository(Reservation);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: req.body.userId },
  });

  const room = await meetingRoomRepository.findOne({
    where: { id: req.body.roomId },
  });

  const result = await reservationRepository.update(req.body.id, {
    name: req.body.name,
    meetingRoom: room,
    meetingDate: req.body.meetingDate,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    user: user,
  });

  return res.json(result);
});

router.post('/', async (req: Request, res: Response) => {
  console.log('post');
  console.log(req.body);
  console.log(req.body.id);
  // if(req.body.id === 'undefined') return;

  const meetingRoomRepository = AppDataSource.getRepository(MeetingRoom);
  const reservationRepository = AppDataSource.getRepository(Reservation);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: req.body.userId },
  });

  const room = await meetingRoomRepository.findOne({
    where: { id: req.body.meetingRoomId },
  });

  console.log(room);

  // const reservation = await reservationRepository.create(req.body);
  const reservation = new Reservation();
  reservation.name = req.body.name;
  reservation.meetingRoom = room;
  reservation.meetingDate = req.body.meetingDate;
  reservation.startTime = req.body.startTime;
  reservation.endTime = req.body.endTime;
  reservation.user = user;
  const result = await reservationRepository.save(reservation);
  return res.json(result);
});

router.get('/', async (req: Request, res: Response) => {
  const date = new Date(req.query.date as string);
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + 1);
  console.log(date);
  console.log(nextDate);
  const reservationRepository = AppDataSource.getRepository(Reservation);
  const meetingRoomRepository = AppDataSource.getRepository(MeetingRoom);

  const reservationList = await reservationRepository
    .createQueryBuilder('reservation')
    .leftJoinAndSelect('reservation.meetingRoom', 'meetingRoom')
    .where('reservation.meetingDate >= :date', { date: date })
    .andWhere('reservation.meetingDate < :nextDate', { nextDate: nextDate })
    .getMany();

  console.log(reservationList);
  return res.json(reservationList);
});

export default router;
