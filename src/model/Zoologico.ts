import { Atracao } from "./Atracao";

/**
 * Representa uma classe que define um Zoologico.
 */
export class Zoologico {
  private nome: string; /* Armazena o nome do zoológico.*/
  private lista_de_atracoes: Atracao[]; /* Armazena a lista de atrações do zoológico.*/

  /**
   * Cria uma nova instância de Zoologico.
   * @param _nome O nome do zoológico.
   * @param _lista_de_atracoes A lista de atrações do zoológico.
   */
  constructor(_nome: string, _lista_de_atracoes: Atracao[]) {
      this.nome = _nome; /* Inicializa o nome do zoológico.*/
      this.lista_de_atracoes = _lista_de_atracoes; /* Inicializa a lista de atrações do zoológico.*/
  }

    /**
     * Retorna o nome do zoológico.
     * 
     * @returns O nome do zoológico.
     */
    public getNome(): string {
      return this.nome;
    }
  
    /**
     * Define o nome do zoológico.
     * 
     * @param _nome O novo nome do zoológico.
     */
    public setNome(_nome: string): void {
      this.nome = _nome;
    }

    /**
     * Retorna a lista de atrações do zoológico.
     * 
     * @returns A lista de atrações do zoológico.
     */
    public getLista_de_atracoes(): Atracao[] {
      return this.lista_de_atracoes;
    }

    /**
     * Define a lista de atrações do zoológico.
     * 
     * @param _lista_de_atracoes A nova lista de atrações do zoológico.
     */
    public setLista_de_atracoes(_lista_de_atracoes: Atracao[]): void {
      this.lista_de_atracoes = _lista_de_atracoes;
    }
}
