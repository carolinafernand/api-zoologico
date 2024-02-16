import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil } from './model/Reptil';
import { Habitat } from './model/Habitat';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';

const server = express(); // Cria uma instância do servidor Express.
const port = 3000; // Define a porta em que o servidor irá escutar.

server.use(express.json()); // Middleware para interpretar JSON em requisições.
server.use(cors()); // Middleware para habilitar requisições entre diferentes origens.

// Rota para testar a criação de uma instância de Ave e retorná-la como JSON.
server.get('/testeAve', (req, res) => {
    let ave: Ave = new Ave('Papagaio', 30, 'Masculino', 10);
    res.json(ave);
})

// Rota para testar a criação de uma instância de Reptil e retorná-la como JSON.
server.get('/testeReptil', (req, res) => {
    let reptil: Reptil = new Reptil('Roberto', 2024, 'Feminino', 'ganoide');
    res.json(Reptil);
})

// Rota para testar a criação de uma instância de Mamifero e retorná-la como JSON.
server.get('/testeMamifero', (req, res) => {
    let mamifero: Mamifero = new Mamifero('Felix', 812, 'Masculino', 'Gato');
    res.json(mamifero);
})

// Rota para criar uma nova ave usando dados do corpo da requisição e retorná-la como JSON.
server.post('/ave', (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;
    let ave: Ave = new Ave(nome, idade, genero, envergadura);
    res.json(["A nova ave do zoologico é: ", ave]);
});

// Rota para criar um novo habitat usando dados do corpo da requisição e retornar uma mensagem.
server.post(`/Habitat`, (req, res) => {
    const { nome, animais } = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json(`Zoologico criado`);
});

// Rota para criar uma nova atração usando dados do corpo da requisição e retornar uma mensagem.
server.post(`/atracao`, (req, res) => {
    const { nome, habitat } = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(Atracao);
    res.status(200).json(`Atracao criada`);
});

// Rota para criar um novo zoológico usando dados do corpo da requisição e retornar uma mensagem.
server.post(`/zoologico`, (req, res) => {
    const { nome, atracao } = req.body;
    const zoo = new Zoologico(nome, atracao);
    console.log(zoo);
    res.status(200).json(`Zoologico criado`);
});

// Inicia o servidor na porta especificada e imprime uma mensagem indicando que está escutando.
server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})

