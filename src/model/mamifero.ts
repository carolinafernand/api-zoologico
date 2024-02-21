import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;


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

    static async listarMamiferos() {
        const listaDeMamiferos: Array<Mamifero> = [];
        try {
          const queryReturn = await database.query(`SELECT * FROM  mamifero;  `);
          queryReturn.rows.forEach(Mamifero => {
            listaDeMamiferos.push(Mamifero);
          });
    
          // só pra testar se a lista veio certa do banco
          console.log(listaDeMamiferos);
    
          return listaDeMamiferos;
        } catch (error) {
          console.log('Erro no modelo');
          console.log(error);
          return "error";
        }
      }
    
    
      static async cadastrarMamifero(mamifero: Mamifero): Promise<any> {
        try {
            let insertResult = false;
            await database.query(`INSERT INTO mamifero (nome, idade, genero, raca)
                VALUES
                ('${mamifero.getNome().toUpperCase()}', ${mamifero.getIdade()}, '${mamifero.getGenero().toUpperCase()}', '${mamifero.getRaca().toUpperCase()}');
            `).then((result) => {
                if(result.rowCount != 0) {
                    insertResult = true;
                }
            });
            return insertResult;
        } catch(error) {
            return error;
        }
    }
}