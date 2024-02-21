import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool; 

/**
 * Representa uma classe que define um Reptil, estendendo a classe Animal.
 */
export class Reptil extends Animal {
    private tipo_de_escamas: string; 

    /**
     * Cria uma nova instância de Reptil.
     * @param _nome O nome do réptil.
     * @param _idade A idade do réptil.
     * @param _genero O gênero do réptil.
     * @param _tipo_de_escamas O tipo de escamas do réptil.
     */

    constructor(_nome: string, _idade: number, _genero: string, _tipo_de_escamas: string) {
        super(_nome, _idade, _genero); 
        this.tipo_de_escamas = _tipo_de_escamas; 
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
 
    
    static async listarRepteis() {
        const listaDeRepteis: Array<Reptil> = [];
        try {
            const queryReturn = await database.query(`SELECT * FROM reptil WHERE tipo_de_escamas = 'Escudos';
            `);
            queryReturn.rows.forEach(reptil => {
                listaDeRepteis.push(reptil);
            });

            // só pra testar se a lista veio certa do banco
            console.log(listaDeRepteis);

            return listaDeRepteis;
        } catch (error) {
            console.log('Erro no modelo');
            console.log(error);
            return "error";
        }
    }
}

