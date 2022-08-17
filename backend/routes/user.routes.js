import {Router} from "express";
import { deleteUser, getUser, getUsers, postUser, putUser } from "../controllers/user.controllers.js"

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.post("/", postUser);

userRouter.put("/:id", putUser);

userRouter.delete("/:id", deleteUser);

userRouter.get("/:id", getUser);

export default userRouter;