import { Router } from "express";

import UserController from "../controller/UserController";

const userRoutes = Router();
const userController = new UserController();
userRoutes.get("/users", userController.getUsers);
userRoutes.post("/", userController.create);
userRoutes.post("/:id", userController.enable);

export default userRoutes;
