import { Animal } from "./Animal";

export class Ave extends Animal{
  private envergadura: number;/*
                                Propriedade privada para armazenar a envergadura da ave
                              */

                                /**
     * Cria uma instância de Ave.
     * 
     * @param {string} _nome - O nome da ave.
     * @param {number} _idade - A idade da ave.
     * @param {string} _genero - O gênero da ave.
     * @param {number} _envergadura - A envergadura da ave.
     */
  constructor(_nome: string, _idade: number, _genero: string, _envergadura: number) {
   

      super(_nome, _idade, _genero); /*
                                      Chama o construtor da classe pai (Animal) passando nome, idade e gênero
                                     */
      this.envergadura = _envergadura; /*
                                         Inicializa a envergadura da ave com o valor fornecido
                                       */
  }

  public getEnvergadura(): number {
      return this.envergadura;
    }
  
    /**
     * Retorna a envergadura da ave.
     * 
     * @returns {number} A envergadura da ave.
     */
    
  public setEnvergadura(_envergadura: number): void {
      this.envergadura = _envergadura;
    }

    
    /**
     * Define a envergadura da ave.
     * 
     * @param {number} _envergadura - A nova envergadura da ave.
     */
}