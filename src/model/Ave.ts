class Ave extends Animal{
    private envergadora: string;

    constructor(_envergadora: string, _nome: string, _idade: number, _genero: string) {
        super(_nome, _idade, _genero);
        this.envergadora = _envergadora;
    }

    public getEnvergadora(): string {
        return this.envergadora;
      }
    
    public setEnvergadora(_envergadora: string): void {
        this.envergadora = _envergadora;
      }
}