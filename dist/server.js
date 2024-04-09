"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./src/app");
require("dotenv/config");
const PORT = process.env.PORT;
app_1.app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});
