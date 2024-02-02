import cors from "cors";
import express from "express";
import { Ave } from "./model/Ave";
import { Reptil } from "./model/Reptil";
import { Mamifero } from "./model/Mamifero";

const port: number = 4321;

const server = express();

server.use(express.json());
server.use(cors());

server.get(`/Ave`, (reg, res) => {
    let ave: Ave = new Ave('Papagaio', 30, `Masculino`, 10);
      res.json(ave)
})

server.get(`/Reptil`, (reg, res) => {
    let reptil: Reptil = new Reptil('ganóides', `lili`, 33, `Feminino`);
      res.json(reptil)
})

server.get(`/Mamifero`, (reg, res) => {
    let mamifero: Mamifero = new Mamifero ('Pug', `jorge `, 12 , `Masculino`);
      res.json(mamifero)
})


server.post('/cadastro', (req, res) => {
    try {
        const { nome, idade, genero, envergadura } = req.body;
        const ave = new Ave(nome, idade, genero, envergadura);

        console.log('Ave cadastrada:', ave);
        persistirAve(ave);

        res.json({ mensagem: "Ave cadastrada com sucesso", ave });
    } catch (error) {
        console.error('Erro ao cadastrar ave:', error);
        res.status(500).json({ mensagem: "Erro ao cadastrar ave" });
    }
});


let bancoDadosAve: Ave[] = [];
function persistirAve(ave: Ave) {
    try {
        bancoDadosAve.push(ave);
        console.log(`Ave persistida:`, ave);
    } catch (error) {
        console.error(`Erro ao persistir os dados\n ${error}`);
    }
}



server.listen(port, () => {
    console.log(`Servidor esutando no endereço http://localhost:${port}`);
})