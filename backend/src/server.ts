import express, { Request, Response } from "express";
import "./database";

const app = express();

app.use(express.json());
app.get("", (req: Request, res: Response) => res.json({ msg: "ola" }));

app.listen(3333);
