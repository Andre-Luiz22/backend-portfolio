import express, { Request, Response } from "express";

import { router as cardProjeto } from "./CardProjetoRoutes";
import { router as ANDRoidE } from "./ANDRoidERoutes";
import { router as fileUpload } from "./FileUploadRoutes";

export const routes = (app: express.Express) => {
  app.route("/").get((req: Request, res: Response) => {
    res.status(200).json({ message: "everything's ok" });
  });
  app.use(express.json(), cardProjeto, ANDRoidE, fileUpload);
};
