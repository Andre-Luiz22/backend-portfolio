import mongoose from "mongoose";

const cardProjetoSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    link: { type: mongoose.Schema.Types.String },
    title: { type: mongoose.Schema.Types.String },
    description: { type: mongoose.Schema.Types.String },
    imgPath: { type: mongoose.Schema.Types.String },
    tags: { type: mongoose.Schema.Types.Array },
  },
  {
    versionKey: false,
  }
);

export const cardProjeto = mongoose.model("cardsProjetos", cardProjetoSchema);
