import { Animal } from "./Animal";

/**
 * Representa uma classe que define um Habitat.
 */
export class Habitat {
    private nome: string; /* Armazena o nome do habitat.*/
    private lista_de_animais: Animal; /* Armazena a lista de animais do habitat.*/

    /**
     * Cria uma nova instância de Habitat.
     * @param _nome O nome do habitat.
     * @param _lista_de_animais A lista de animais do habitat.
     */
    constructor(_nome: string, _lista_de_animais: Animal) {
        this.nome = _nome; /* Inicializa o nome do habitat.*/
        this.lista_de_animais = _lista_de_animais; /* Inicializa a lista de animais do habitat.*/
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
     * Retorna a lista de animais .
     * 
     * @returns a lista_de_animais .
     */

    public getLista_de_animais(): Animal {
        return this.lista_de_animais;
    }

       /**
     * Define a lista de animais do habitat.
     * 
     * @param _lista_de_atracoes A lista de animais a ser atribuida ao habitat .
     */
    public setLista_de_animais(_lista_de_animais: Animal): void {
        this.lista_de_animais = _lista_de_animais;
    }
 }