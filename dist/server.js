"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const db_1 = __importDefault(require("./db"));
const models_1 = require("./models");
async function run() {
    (0, models_1.initModels)(db_1.default);
    const port = parseInt(process.env.PORT || '3000');
    const server = http_1.default.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
    });
    server.listen(port, () => {
        console.log(`Server running at ${port}`);
    });
}
run();
