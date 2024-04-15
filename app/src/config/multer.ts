import multer, { FileFilterCallback } from "multer";
import path from "path";
import crypto from "crypto";
import { Request } from "express";
type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;
export const multerConfig: multer.Options = {
  dest: path.resolve(__dirname, "..", "..", "..", "tmp", "uploads"),
  storage: multer.diskStorage({
    destination: (
      req: Request,
      file: Express.Multer.File,
      cb: DestinationCallback
    ) => {
      cb(null, path.resolve(__dirname, "..", "..", "..", "tmp", "uploads"));
    },
    filename: (
      req: Request,
      file: Express.Multer.File,
      cb: FileNameCallback
    ) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err, "");

        const fileName = `${hash.toString("hex")}-${file.originalname}`;
        cb(null, fileName);
      });
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
  ) => {
    const allowedMimes = [
      "image/jpeg",
      "image/jpegp",
      "image/png",
      "image/webp",
      "image/jpg"
    ];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
};
