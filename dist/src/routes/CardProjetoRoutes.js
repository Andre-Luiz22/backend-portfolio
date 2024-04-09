"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const cardProjetoController_1 = require("../controllers/cardProjetoController");
exports.router = express_1.default.Router();
exports.router
    .get("/cardProjetos", cardProjetoController_1.CardProjetoController.listAllCards);
