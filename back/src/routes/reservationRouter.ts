import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("!!!!");
  return res.json(req.body);
});

export default router;
