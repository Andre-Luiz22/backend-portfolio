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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dialogflow_1 = __importDefault(require("@google-cloud/dialogflow"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const detectIntent = (_a) => __awaiter(void 0, [_a], void 0, function* ({ languageCode, queryText, sessionId, }) {
    const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
    const PROJECTID = CREDENTIALS.project_id;
    const CONFIGURATION = {
        credentials: {
            private_key: CREDENTIALS["private_key"],
            client_email: CREDENTIALS["client_email"],
        },
    };
    const sessionClient = new dialogflow_1.default.SessionsClient(CONFIGURATION);
    const sessionPath = sessionClient.projectAgentSessionPath(PROJECTID, sessionId);
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: queryText,
                languageCode: languageCode,
            },
        },
    };
    const responses = yield sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    console.log(result);
});
detectIntent({ languageCode: "pt-br", queryText: "olá", sessionId: "123456" });
