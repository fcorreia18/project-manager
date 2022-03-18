import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.json({ message: "im here!" }));

app.listen(3333);
