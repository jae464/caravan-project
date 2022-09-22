import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  return res.json(req.body);
});

export default router;
