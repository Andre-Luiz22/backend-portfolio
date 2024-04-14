import express from "express";
import multer from "multer";
import { multerConfig } from "../config/multer";
import { FileUploadController } from "../controllers/FileUploadController";

export const router = express.Router();

router.post("/sendFile", multer(multerConfig).single("file"), FileUploadController.insertNewImage);
