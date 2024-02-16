import { Animal } from "./Animal";

/**
 * Representa uma classe que define um Habitat.
 */
export class Habitat {
    private nome: string; 
    private lista_de_animais: Animal; 

    /**
     * Cria uma nova instância de Habitat.
     * @param _nome O nome do habitat.
     * @param _lista_de_animais A lista de animais do habitat.
     */
    constructor(_nome: string, _lista_de_animais: Animal) {
        this.nome = _nome; 
        this.lista_de_animais = _lista_de_animais; 
    }

    /**
     * Retorna o nome do habitat.
     * @returns O nome do habitat.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do habitat.
     * @param _nome O novo nome do habitat.
     */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    /**
     * Retorna a lista de animais do habitat.
     * @returns A lista de animais do habitat.
     */
    public getLista_de_animais(): Animal {
        return this.lista_de_animais;
    }

    /**
     * Define a lista de animais do habitat.
     * @param _lista_de_animais A lista de animais a ser atribuída ao habitat.
     */
    public setLista_de_animais(_lista_de_animais: Animal): void {
        this.lista_de_animais = _lista_de_animais;
    }
}
