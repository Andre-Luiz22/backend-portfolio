import express from "express";
import { CardProjetoController } from "../controllers/cardProjetoController";

export const router = express.Router();

router
  .get("/cardProjetos", CardProjetoController.listAllCards)