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
    } catch (err) {
      // res.status(500).json({ message: "Algum erro na insersão da imagem" });
    }
  };

  // static getAllImages = async (req: Request, res: Response) => {
  //   try {
  //     const allImages = await imageMongo.find();
  //     res.status(200).json(allImages);
  //   } catch (err) {
  //     res.status(500).json({
  //       message:
  //         "Houve um erro ao tentar encontrar todas as imagens cadastradas",
  //     });
  //   }
  // };

  // static getImageById = async (req: Request, res: Response) => {
  //   const id = req.params.id;

  //   try {
  //     const image = await imageMongo.findById(id);
  //     res.status(200).json(image);
  //   } catch (err) {
  //     res.status(500).json({
  //       message: "Houve um erro ao tentar encontrar a imagem pelo id",
  //     });
  //   }
  // };

  // static getImageByKey = async (req: Request, res: Response) => {
  //   const key = req.params.key;

  //   try {
  //     const img = await imageMongo.find({ key });
  //     res.status(200).json(img);
  //   } catch (err) {
  //     res.status(500).json({
  //       message: "Houve um erro ao tentar encontrar a imagem pela key",
  //     });
  //   }
  // };

  // static deleteImageByKey = async (req: Request, res: Response) => {
  //   const key = req.params.key;

  //   try {
  //     await imageMongo.deleteMany({ key });
  //     res.status(200).json({ message: "imagem deletada com sucesso" });
  //   } catch (err) {
  //     res.status(500).json({
  //       message: "Houve um erro ao tentar deletar a imagem pelo id",
  //     });
  //   }
  // };
}
