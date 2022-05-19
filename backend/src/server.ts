import "reflect-metadata";
import express, { Response, NextFunction, Request } from "express";

import "./config/env";
import "./database";
import "express-async-errors";
import AppError from "./errors/AppError";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response
            .status(err.statusCode)
            .json({ status: "error", message: err.message });
    }
    return response
        .status(500)
        .json({ status: "error", message: "internal server error" });
});

app.listen(3333);
