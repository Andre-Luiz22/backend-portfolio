import { Request, Response } from "express";
import { detectIntentFromANDRoidE } from "../services/androideDFServices";

export class ANDRoidEController {
  static sendMessageToANDRoidE = async (req: Request, res: Response) => {
    try {
      const resposta = await detectIntentFromANDRoidE(req.body);
      res.status(200).json(resposta);
    } catch (err) {
      res.status(500).json({ message: "erro no df" });
    }
  };
}
