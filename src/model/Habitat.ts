import { Animal } from "./Animal";

export class Habitat{

    private nome: string;
    private lista_de_animais: Animal;
    
    constructor(_nome: string,
                _lista_de_animais: Animal) {
        this.nome = _nome;
        this.lista_de_animais = _lista_de_animais;
    }

    public getNome(): string {
        return this.nome;
    }
    
    public setNome(_nome: string): void {
        this.nome = _nome;
    }
    
    public getLista_de_animais(): Animal {
        return this.lista_de_animais;
    }
    
    public setLista_de_animais(_lista_de_animais: Animal): void {
        this.lista_de_animais = _lista_de_animais;
    }
}