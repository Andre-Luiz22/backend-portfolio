import express from "express";
import { ANDRoidEController } from "../controllers/ANDRoidEController";

export const router = express.Router();

router.post("/ANDRoidE", ANDRoidEController.sendMessageToANDRoidE);
