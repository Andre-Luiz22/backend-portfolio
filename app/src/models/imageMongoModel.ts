import mongoose, { Error } from "mongoose";
import fs from "fs";
import path from "path";
import { promisify } from "util";

interface a {
  _id: string;
  name: string;
  key: string;
  size: number;
  url: string;
}

const imageMongoSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: mongoose.Schema.Types.String },
    key: { type: mongoose.Schema.Types.String },
    size: { type: mongoose.Schema.Types.Number },
    url: { type: mongoose.Schema.Types.String },
  },
  {
    versionKey: false,
  }
);

// imageMongoSchema.pre("deleteMany", async function () {
//   const file: string = this.getQuery().key;

//   return promisify(fs.unlink)(
//     path.resolve(__dirname, "..", "..", "..", "tmp", "uploads", file)
//   );
// });

// imageMongoSchema.pre("save", function () {
//   if (!this.url) {
//     this.url = `${process.env.APP_URL}/imgs/${this.key}`;
//   }
// });

export const imageMongo = mongoose.model("images", imageMongoSchema);
