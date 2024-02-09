import { Atracao } from "./Atracao";

export class Zoologico {
    private nome: string;
    private lista_de_atracoes: Atracao[];
  
    constructor(_nome: string, _lista_de_atracoes: Atracao[]) {
      this.nome = _nome;
      this.lista_de_atracoes = _lista_de_atracoes;
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
