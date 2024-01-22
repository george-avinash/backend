import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingsRouter from "./routes/booking-routes.js";
dotenv.config();
const app = express();
// const cors = require('cors');

// const PORT = process.env.PORT || 5000;
//middlewawres
const port = 5000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.6r6mwhf.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(process.env.PORT || port, () =>
      console.log("Connected to  Database and Server is running")
    )
  )
  .catch((e) => console.log(e));
