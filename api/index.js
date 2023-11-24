import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Mongo Contected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.listen(3030, () => {
  console.log("Server is Runing on port 3030");
});

app.use("/api/user", userRouter);