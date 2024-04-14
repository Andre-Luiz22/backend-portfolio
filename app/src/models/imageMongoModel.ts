import mongoose from "mongoose";

const imageMongoSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: mongoose.Schema.Types.String },
    key: { type: mongoose.Schema.Types.String },
    size: { type: mongoose.Schema.Types.Number },
    url: { type: mongoose.Schema.Types.Number },
  },
  {
    versionKey: false,
  }
);

export const imageMongo = mongoose.model("images", imageMongoSchema);