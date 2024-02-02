import { Animal } from "./Animal";


export class Ave extends Animal{
    private envergadora: number;

    constructor( _nome: string, _idade: number, _genero: string, _envergadora: number) {
        super(_nome, _idade, _genero);
        this.envergadora = _envergadora;
    }

    public getEnvergadora(): number {
        return this.envergadora;
      }
    
    public setEnvergadora(_envergadora: number): void {
        this.envergadora = _envergadora;
      }
}