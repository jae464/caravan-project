import express from 'express';
import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entity/User';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const users = await AppDataSource.getRepository(User).find();
    res.json(users);
})

router.post('/', async (req: Request, res: Response) => {
    console.log(req.body);
    const user = await AppDataSource.getRepository(User).create(req.body)
    const result = await AppDataSource.getRepository(User).save(user);
    return res.json(result);

})

export default router;