import express, { NextFunction, Request, Response } from "express";

import { routes } from "./routes";

import dotenv from "dotenv";
import cors from "cors";

import { db } from "./config/dbConnet";
dotenv.config();

db.on("error", console.log.bind(console, "erro de conexão"));
db.once("open", () => console.log("conexão feita com sucesso"));

export const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  next();
}, cors({ maxAge: 84600 }));
app.use(express.json());
routes(app);
