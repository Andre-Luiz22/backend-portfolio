import { NextFunction, Request, Response } from "express";
import { detectIntentFromANDRoidE } from "../services/androideDFServices";

export class ANDRoidEController {
  static sendMessageToANDRoidE = async (req: Request, res: Response) => {
    try {
      const resposta = await detectIntentFromANDRoidE(req.body);
      res.status(200).set((req: Request, res: Response, next: NextFunction) => {
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        next();
      }).json(resposta);
    } catch (err) {
      res.status(500).json({ message: "erro no df" });
    }
  };
}
