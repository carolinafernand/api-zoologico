import { Animal } from "./Animal";



/**
 * Representa uma classe que define um Reptil, estendendo a classe Animal.
 */
export class Reptil extends Animal {
    private tipo_de_escamas: string; /*Armazena o tipo de escamas do réptil.*/

    /**
     * Cria uma nova instância de Reptil.
     * @param _nome O nome do réptil.
     * @param _idade A idade do réptil.
     * @param _genero O gênero do réptil.
     * @param _tipo_de_escamas O tipo de escamas do réptil.
     */
    constructor(_nome: string, _idade: number, _genero: string, _tipo_de_escamas: string) {
        super(_nome, _idade, _genero); /* Chama o construtor da classe Animal para inicializar os atributos herdados.*/
        this.tipo_de_escamas = _tipo_de_escamas; /*Inicializa o tipo de escamas do réptil.*/
    }

    /**
     * Retorna o tipo de escamas do réptil.
     * @returns O tipo de escamas do réptil.
     */
    public getTipo_de_escamas(): string {
        return this.tipo_de_escamas;
    }
    
    /**
     * Define o tipo de escamas do réptil.
     * @param _tipo_de_escamas O novo tipo de escamas do réptil.
     */
    public setTipo_de_escamas(_tipo_de_escamas: string): void {
        this.tipo_de_escamas = _tipo_de_escamas;
    }
 }