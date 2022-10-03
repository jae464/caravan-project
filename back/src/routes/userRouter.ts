import express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await AppDataSource.getRepository(User).find();
  res.json(users);
});

router.get('/:employeeNumber', async (req: Request, res: Response) => {
  console.log("req.body", req.params);
  const employeeNumber = Number(req.params.employeeNumber);
  console.log(employeeNumber);
  const user = await AppDataSource.getRepository(User).findOne({
    where: {employeeNumber}
  })
  console.log(`find user ${user}`);
  console.log(user);
  return res.json(user);
})

router.post("/", async (req: Request, res: Response) => {
  const user = await AppDataSource.getRepository(User).create(req.body);
  const result = await AppDataSource.getRepository(User).save(user);
  return res.json(result);
});

export default router;
