"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ANDRoidEController = void 0;
const androideDFServices_1 = require("../services/androideDFServices");
class ANDRoidEController {
}
exports.ANDRoidEController = ANDRoidEController;
_a = ANDRoidEController;
ANDRoidEController.sendMessageToANDRoidE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resposta = yield (0, androideDFServices_1.detectIntentFromANDRoidE)(req.body);
        res.status(200).json(resposta);
    }
    catch (err) {
        res.status(500).json({ message: "erro no df" });
    }
});
