import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil } from './model/Reptil';

const server = express();
const port = 3000;

server.use(express.json());
server.use(cors());

server.get('/testeAve', (req, res) => {
    let ave: Ave = new Ave('Papagaio', 30, 'Masculino', 10);
    res.json(ave);
})

server.get('/testeReptil', (req, res) => {
    let reptil: Reptil = new Reptil('Roberto', 2024, 'Feminino', 'ganoide');
    res.json(Reptil);
})

server.get('/testeMamifero', (req, res) => {
    let mamifero: Mamifero = new Mamifero('Felix', 812, 'Masculino', 'Gato');
    res.json(mamifero);
})

server.post('/ave', (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;
    let ave: Ave = new Ave( nome, idade, genero, envergadura);
    res.json(["A nova ave do zoologico é: ", ave]);
});

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})