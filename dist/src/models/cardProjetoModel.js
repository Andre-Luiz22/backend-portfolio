"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardProjeto = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const cardProjetoSchema = new mongoose_1.default.Schema({
    id: { type: mongoose_1.default.Schema.Types.ObjectId },
    link: { type: mongoose_1.default.Schema.Types.String },
    title: { type: mongoose_1.default.Schema.Types.String },
    description: { type: mongoose_1.default.Schema.Types.String },
    imgPath: { type: mongoose_1.default.Schema.Types.String },
    tags: { type: mongoose_1.default.Schema.Types.Array },
}, {
    versionKey: false,
});
exports.cardProjeto = mongoose_1.default.model("cardsProjetos", cardProjetoSchema);
