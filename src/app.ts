import cors from "cors";
import express from "express";

const port: number = 4321;

const server = express();

server.use(express.json());
server.use(cors());

server.get(`/teste`, (reg, res) => {
      res.json(`Olá Mundo !!`);
})
server.listen(port, () => {
    console.log(`Servidor esutando no endereço http://localhost:${port}`);
})