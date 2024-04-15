import express from "express";
import multer from "multer";
import { multerConfig } from "../config/multer";
import { FileUploadController } from "../controllers/FileUploadController";

export const router = express.Router();

router.get("/getImages", FileUploadController.getAllImages);
router.get("/getImageById/:id", FileUploadController.getImageById);
router.get("/getImageByKey/:key", FileUploadController.getImageByKey);
router.post(
  "/sendFile",
  multer(multerConfig).single("file"),
  FileUploadController.insertNewImage
);
router.delete("/deleteImageById/:key", FileUploadController.deleteImageByKey);
