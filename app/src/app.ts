import express from "express";

import { routes } from "./routes";

import dotenv from "dotenv";
import cors from "cors";

import { db } from "./config/dbConnet";
dotenv.config();

db.on("error", console.log.bind(console, "erro de conexão"));
db.once("open", () => console.log("conexão feita com sucesso"));

console.log();

export const app = express();

app.use(cors());
app.use(express.json());
routes(app);
