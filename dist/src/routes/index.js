"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const CardProjetoRoutes_1 = require("./CardProjetoRoutes");
const ANDRoidERoutes_1 = require("./ANDRoidERoutes");
const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).json({ message: "everything's ok" });
    });
    app.use(express_1.default.json(), CardProjetoRoutes_1.router, ANDRoidERoutes_1.router);
};
exports.routes = routes;
