import express, { NextFunction, Request, Response } from "express";

import { routes } from "./routes";

import dotenv from "dotenv";
import cors from "cors";

import { db } from "./config/dbConnet";
import morgan from "morgan";
import path from "path";
dotenv.config();

db.on("error", console.log.bind(console, "erro de conexão"));
db.once("open", () => console.log("conexão feita com sucesso"));

export const app = express();

const options: cors.CorsOptions = {
  origin: "*",
  methods: "GET, POST",
};

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  "/imgs",
  express.static(path.resolve(__dirname, "..", "..", "tmp", "uploads"))
);
routes(app);
