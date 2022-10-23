import express from 'express';
import { AppDataSource } from '../data-source';
import { MeetingRoom } from '../entity/MeetingRoom';

const router = express.Router();

router.get('/:floor', async (req, res) => {
    const floor = Number(req.params.floor);
    console.log(floor);
    const roomList = await AppDataSource.getRepository(MeetingRoom).find({
        where: {floor}
    });

    return res.json(roomList);
})

export default router;