import { Habitat } from "./Habitat";

export class Atracao {
    private nome: string; /* Propriedade privada para armazenar o nome da atração */
    private listas_de_habitat: Habitat; /* Propriedade privada para armazenar a lista de habitats da atração */

    /**
     * Construtor da classe Atracao.
     * @param _nome - O nome da atração.
     * @param _listas_de_habitat - A lista de habitats da atração.
     */
    constructor(_nome: string, _listas_de_habitat: Habitat) {
        this.nome = _nome; 
        this.listas_de_habitat = _listas_de_habitat; 
    }

    /**
     * Retorna o nome da atração.
     * @returns O nome da atração.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome da atração.
     * @param _nome - O novo nome da atração.
     */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    /**
     * Retorna a lista de habitats da atração.
     * @returns A lista de habitats da atração.
     */
    public getLista_de_habitat(): Habitat {
        return this.listas_de_habitat;
    }

    /**
     * Define a lista de habitats da atração.
     * @param _listas_de_habitat - A nova lista de habitats da atração.
     */
    public setLista_de_habitat(_listas_de_habitat: Habitat): void {
        this.listas_de_habitat = _listas_de_habitat;
    }
}
