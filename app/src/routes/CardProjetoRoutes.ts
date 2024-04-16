import express from "express";
import { CardProjetoController } from "../controllers/cardProjetoController";

export const router = express.Router();

router.get("/cardProjetos", CardProjetoController.listAllCards);
router.get("/favoriteCards", CardProjetoController.listFavoriteCards);
router.post("/createNewCard", CardProjetoController.createNewCard);
router.delete("/deleteCard/:id", CardProjetoController.deleteCardById);
