import express, { NextFunction, Request, Response } from "express";

import { routes } from "./routes";

import dotenv from "dotenv";
import cors from "cors";

import { db } from "./config/dbConnet";
dotenv.config();

db.on("error", console.log.bind(console, "erro de conexão"));
db.once("open", () => console.log("conexão feita com sucesso"));

export const app = express();

const options: cors.CorsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(options));
app.use(express.json());
routes(app);
