"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const dbConnet_1 = require("./config/dbConnet");
dotenv_1.default.config();
dbConnet_1.db.on("error", console.log.bind(console, "erro de conexão"));
dbConnet_1.db.once("open", () => console.log("conexão feita com sucesso"));
console.log();
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
(0, routes_1.routes)(exports.app);
