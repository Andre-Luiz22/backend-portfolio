import { Request, Response } from "express";
import { detectIntentFromANDRoidE } from "../services/androideDFServices";

export class ANDRoidEController {
  static sendMessageToANDRoidE = async (req: Request, res: Response) => {
    try {
      res.set("Access-Control-Allow-Origin", "http://localhost:3001:5173");
      const resposta = await detectIntentFromANDRoidE(req.body);
      res.status(200).json(resposta);
    } catch (err) {
      res.status(500).json({ message: "erro no df" });
    }
  };
}
