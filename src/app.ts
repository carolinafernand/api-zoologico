import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil } from './model/Reptil';
import { Habitat } from './model/Habitat';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';
import { DatabaseModel } from './model/DatabaseModel';

const server = express(); // Cria uma instância do servidor Express.
const port = 3000; // Define a porta em que o servidor irá escutar.

server.use(express.json()); // Middleware para interpretar JSON em requisições.
server.use(cors()); // Middleware para habilitar requisições entre diferentes origens.

// Rota para testar a criação de uma instância de Ave e retorná-la como JSON.
server.get('/testeAve', (req, res) => {
    let ave: Ave = new Ave('Papagaio', 30, 'Masculino', 10);
    res.json(ave);
})
/*
// Rota para testar a criação de uma instância de Reptil e retorná-la como JSON.
server.get('/testeReptil', (req, res) => {
    let reptil: Reptil = new Reptil('Roberto', 2024, 'Feminino', 'ganoide');
    res.json(Reptil);
}) */

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

server.get('/reptil', async (req, res) => {
    const repteis = await Reptil.listarRepteis();

    res.status(200).json(repteis);
})

server.post('/new/reptil', async (req, res) => {
    const { nome, idade, genero, tipo_de_escamas } = req.body;

    const novoReptil = new Reptil(nome, idade, genero, tipo_de_escamas);

    const result = await Reptil.cadastrarReptil(novoReptil);

    if(result) {
        return res.status(200).json('Reptil cadastrado com sucesso');
    } else {
        return res.status(400).json('Não foi possível cadastrar o réptil no banco de dados');
    }
    
})

server.get('/ave', async (req, res) => {
    const aves = await Ave.listarAves();

    res.status(200).json(aves);
})

server.post('/new/ave', async (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;

    const novaAve = new Ave(nome, idade, genero, envergadura);

    const result = await Ave.cadastrarAves(novaAve);

    if (result) {
        return res.status(200).json('Ave cadastrada com sucesso');
    } else {
        return res.status(400).json('Não foi possível cadastrar a ave no banco de dados');
    }

})


server.get('/mamifero', async (req, res) => {
    const mamiferos = await Mamifero.listarMamiferos();

    res.status(200).json(mamiferos);
})

server.post('/new/mamifero', async (req, res) => {
    const { nome, idade, genero, raca } = req.body;

    const novoMamifero = new Mamifero(nome, idade, genero, raca);

    const result = await Mamifero.cadastrarMamifero(novoMamifero);

    if (result) {
        return res.status(200).json('Mamifero cadastrado com sucesso');
    } else {
        return res.status(400).json('Não foi possível cadastrar o Mamifero no banco de dados');
    }

})

new DatabaseModel().testeConexao().then((resbd)  => {
  if(resbd) { 
    // Resposta se o servidor está online
    server.listen(port, () => {
        console.log(`Servidor está escutando no endereço http://localhost:${port}`);
    });
 } else { 
    console.log( "Não foi possivel conetar ao banco de dados") ;
  }

  server.get('/ave', async (req, res) => {
    const aves = await Ave.listarAves();

    res.status(200).json(aves);
})


})

