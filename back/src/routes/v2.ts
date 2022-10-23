import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import { Domain } from "domain";
const router = express.Router();

router.use((req, res, next) => {
  if (true) {
    cors({
      origin: true,
      credentials: true,
    });
  }
});
