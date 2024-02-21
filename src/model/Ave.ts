import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;
/**
 * Representa uma classe que define uma ave.
 */
export class Ave extends Animal {
  /* Propriedade privada para armazenar a envergadura da ave */
  private envergadura: number; 
  
  /**
   * Cria uma instância de Ave.
   * @param {string} _nome - O nome da ave.
   * @param {number} _idade - A idade da ave.
   * @param {string} _genero - O gênero da ave.
   * @param {number} _envergadura - A envergadura da ave.
   */
  constructor(_nome: string, _idade: number, _genero: string, _envergadura: number) {
      super(_nome, _idade, _genero)
      this.envergadura = _envergadura; 
  }

  /**
   * Retorna a envergadura da ave.
   * @returns {number} A envergadura da ave.
   */
  public getEnvergadura(): number {
      return this.envergadura;
  }

  /**
   * Define a envergadura da ave.
   * @param {number} _envergadura - A nova envergadura da ave.
   */
  public setEnvergadura(_envergadura: number): void {
      this.envergadura = _envergadura;
  }

  static async listarAves() {
    const listaDeAves: Array<Ave> = [];
    try {
      const queryReturn = await database.query(`SELECT * FROM  ave;  `);
      queryReturn.rows.forEach(Ave => {
        listaDeAves.push(Ave);
      });

      // só pra testar se a lista veio certa do banco
      console.log(listaDeAves);

      return listaDeAves;
    } catch (error) {
      console.log('Erro no modelo');
      console.log(error);
      return "error";
    }
  }


  static async cadastrarAves(ave: Ave): Promise<any> {
    try {
        let insertResult = false;
        await database.query(`INSERT INTO ave (nome, idade, genero, envergadura)
            VALUES
            ('${ave.getNome().toUpperCase()}', ${ave.getIdade()}, '${ave.getGenero().toUpperCase()}', ${ave.getEnvergadura()});
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
