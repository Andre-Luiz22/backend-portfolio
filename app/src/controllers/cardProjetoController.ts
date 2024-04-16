import { Request, Response } from "express";
import { cardProjeto } from "../models/cardProjetoModel";

export class CardProjetoController {
  static listAllCards = async (req: Request, res: Response) => {
    try {
      const allCards = await cardProjeto.find();
      res.status(200).json(allCards);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Erro na função de buscar todas as imagens" });
    }
  };

  static listFavoriteCards = async (req: Request, res: Response) => {
    try {
      const favoriteCards = await cardProjeto.find({ favorite: true });
      res.status(200).json(favoriteCards);
    } catch (err) {
      res.status(500).json({ message: "Erro ao buscar as imagens favoritas" });
    }
  };

  static createNewCard = async (req: Request, res: Response) => {
    try {
      const newCarrousselCard = await cardProjeto.create(req.body);
      res.status(200).json(newCarrousselCard);
    } catch (err) {
      res.status(500).json({ message: "Falha ao criar o card" });
    }
  };

  static deleteCardById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      await cardProjeto.findByIdAndDelete(id);
      res.status(200).json({ message: "Card deletado com sucesso" });
    } catch (err) {
      res.status(500).json({ message: "Falha ao deletar Card" });
    }
  };
}
