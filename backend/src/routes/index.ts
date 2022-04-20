import { Request, Response, Router } from "express";

import userRoutes from "./user";

const routes = Router();
const routesPrefix = "/api/v1";
routes.get("/", (req: Request, res: Response) => res.json({ msg: "ola" }));

routes.use(`${routesPrefix}/user`, userRoutes);
export default routes;
