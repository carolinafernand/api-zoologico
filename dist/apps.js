"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const port = 4321;
const server = (0, express_1.default)();
server.use(express_1.default.json);
server.use((0, cors_1.default)());
server.get(`/`, (reg, res) => {
});
server.listen(port, () => {
    console.log('Servidor está esutando no endereço http://localhost:${port}');
});
//# sourceMappingURL=apps.js.map