import express from "express";
import mongoose from "./db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

export default app;