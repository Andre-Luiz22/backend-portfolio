import { Request, Response } from "express";
import { cardProjeto } from "../models/cardProjetoModel";

export class CardProjetoController {
  static listAllCards = async (req: Request, res: Response) => {
    try {
      const allCards = await cardProjeto.find();
      res.status(200).json({ allCards });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Erro na função de buscar o conteudo do BD" });
    }
  };
}
