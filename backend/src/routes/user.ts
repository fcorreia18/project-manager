import { Router } from "express";

import UserController from "../controller/UserController";

const userRoutes = Router();
const userController = new UserController();
userRoutes.get("/users", userController.getUsers);
userRoutes.post("/", userController.create);
userRoutes.post("/session", userController.session);
userRoutes.patch("/enable/:id", userController.enable);

export default userRoutes;
