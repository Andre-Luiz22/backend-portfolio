import mongoose from "mongoose";

const cardProjetoSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    link: { type: mongoose.Schema.Types.String },
    title: { type: mongoose.Schema.Types.String },
    description: { type: mongoose.Schema.Types.String },
    imgKey: { type: mongoose.Schema.Types.String },
    imgLink: { type: mongoose.Schema.Types.String },
    imgName: { type: mongoose.Schema.Types.String },
    tags: { type: mongoose.Schema.Types.Array },
    favorite: { type: mongoose.Schema.Types.Boolean },
  },
  {
    versionKey: false,
  }
);

export const cardProjeto = mongoose.model("cardsProjetos", cardProjetoSchema);
