import { Request, Response } from "express";
import { imageMongo } from "../models/imageMongoModel";

export class FileUploadController {
  static insertNewImage = async (req: Request, res: Response) => {
    try {
      const newImage = await imageMongo.create({
        name: req.file?.originalname,
        size: req.file?.size,
        key: req.file?.filename,
        url: "",
      });

      res.status(200).json(newImage);
    } catch (err) {}
  };
}
