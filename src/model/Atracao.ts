import { Habitat } from "./Habitat";

export class Atracao {
    private nome: string;
    private lista_de_habitat: Habitat[];
  
    constructor(_nome: string, _lista_de_habitat: Habitat[]) {
      this.nome = _nome;
      this.lista_de_habitat = _lista_de_habitat;
    }


    /**
     * Retorna o nome da Atracao.
     * 
     * @returns O nome da Atracao.
     */

    public getNome(): string {
      return this.nome;
    }
  

     /**
      * Define o nome da Atracao
      * 
      * @param _nome 
      */
    public setNome(_nome: string): void {
      this.nome = _nome;
    }

  /**
     * Retorna a lista de habitat.
     * 
     * @returns Lista_de_animais.
     */
    public getLista_de_habitat(): Habitat[] {
      return this.lista_de_habitat;
    }


   /**
      * Define o nome do habitat
      * 
      * @param _lista_de_habitat
      */
    public setLista_de_habitat(_lista_de_habitat: Habitat[]): void {
      this.lista_de_habitat = _lista_de_habitat;
    }
}
