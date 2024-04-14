import express from "express";
import multer from "multer";
import { multerConfig } from "../config/multer";

export const router = express.Router();

router.post("/sendFile", multer(multerConfig).single("file"));
