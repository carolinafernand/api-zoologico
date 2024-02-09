import { Animal } from "./Animal";

export class Habitat{

    private nome: string;
    private lista_de_animais: Animal;
    
    constructor(_nome: string,
                _lista_de_animais: Animal) {
        this.nome = _nome;
        this.lista_de_animais = _lista_de_animais;
    }

    /**
     * Retorna o nome do habitat .
     * 
     * @returns O nome do habitat.
     */

    public getNome(): string {
        return this.nome;
    }
    

     /**
      * Define o nome do habitat
      * 
      * @param _nome 
      */
    
    public setNome(_nome: string): void {
        this.nome = _nome;
    }
    

/**
     * Retorna a lista de animais.
     * 
     * @returns Lista_de_animais.
     */

    public getLista_de_animais(): Animal {
        return this.lista_de_animais;
    }

    /**
     * Define os animais do Habitat
     * 
     * @param _lista_de_animais do Habitat 
     */
    
    public setLista_de_animais(_lista_de_animais: Animal): void {
        this.lista_de_animais = _lista_de_animais;
    }
}