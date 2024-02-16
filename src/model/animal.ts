
export class Animal {
  private nome: string; /*
    /**
     * Cria uma instância de Animal.
     * 
     * @param {string} _nome - O nome do animal.
     * @param {number} _idade - A idade do animal.
     * @param {string} _genero - O gênero do animal.
     */

  private idade: number;/*
    Propriedade privada para armazenar a idade do animal
    */
  private genero: string;/*
    Propriedade privada para armazenar o gênero do animal
    */


  /**
   * Cria uma instância de Animal.
   * 
   * @param {string} _nome - O nome do animal.
   * @param {number} _idade - A idade do animal.
   * @param {string} _genero - O gênero do animal.
   */
  constructor(_nome: string, _idade: number, _genero: string) {

    this.nome = _nome; /*
    Inicializa o nome do animal com o valor fornecido
    */
    this.idade = _idade;/*
    Inicializa a idade do animal com o valor fornecido
    */
    this.genero = _genero; /*
    Inicializa o gênero do animal com o valor fornecido
    */
  }

  public getNome(): string {
    return this.nome;
  }

  /**
     * Retorna o nome do animal.
     * 
     * @returns {string} O nome do animal.
     */
  public setNome(_nome: string): void {
    this.nome = _nome;
  }


  /**
   * Define o nome do animal.
   * 
   * @param {string} _nome - O novo nome do animal.
   */
  public getIdade(): number {
    return this.idade;
  }


  /**
   * Retorna a idade do animal.
   * 
   * @returns {number} A idade do animal.
   */
  public setIdade(_idade: number): void {
    this.idade = _idade;
  }


  /**
   * Define a idade do animal.
   * 
   * @param {number} _idade - A nova idade do animal.
   */
  public getGenero(): string {
    return this.genero;
  }

  /**
    * Retorna o gênero do animal.
    * 
    * @returns {string} O gênero do animal.
    */
  public setGenero(_genero: string): void {
    this.genero = _genero;
  }

  /**
     * Define o gênero do animal.
     * 
     * @param {string} _genero - O novo gênero do animal.
     */
}