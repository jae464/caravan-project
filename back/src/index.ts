import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import express, { Request, Response } from "express";
import bodyParser = require("body-parser");
import userRouter from "./routes/userRouter";
import cors from "cors";
import reservationRouter from "./routes/reservationRouter";

AppDataSource.initialize()
  .then(async () => {
    console.log("DB Connected");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25
    // await AppDataSource.manager.save(user);
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

const server = app.listen(app.get("port"), () =>
  console.log(`App Listening on PORT ${app.get("port")}`)
);
