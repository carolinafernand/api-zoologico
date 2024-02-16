import { Animal } from "./Animal";

/**
 * Representa uma classe que define um Mamífero, estendendo a classe Animal.
 */
export class Mamifero extends Animal {
    private raca: string; // Armazena a raça do mamífero.

    /**
     * Cria uma nova instância de Mamifero.
     * @param _nome O nome do mamífero.
     * @param _idade A idade do mamífero.
     * @param _genero O gênero do mamífero.
     * @param _raca A raça do mamífero.
     */
    constructor(_nome: string, _idade: number, _genero: string, _raca: string) {
        super(_nome, _idade, _genero); 
        this.raca = _raca; 
    }

    /**
     * Retorna a raça do mamífero.
     * @returns A raça do mamífero.
     */
    public getRaca(): string {
        return this.raca;
    }

    /**
     * Define a raça do mamífero.
     * @param _raca A nova raça do mamífero.
     */
    public setRaca(_raca: string): void {
        this.raca = _raca;
    }
}