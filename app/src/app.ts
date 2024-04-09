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
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
  next();
}, cors({ maxAge: 84600 }));
app.use(express.json());
routes(app);
