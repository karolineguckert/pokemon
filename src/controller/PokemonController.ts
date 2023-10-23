import PokemonBusiness from "../business/PokemonBusiness";

class PokemonController {
    private pokemonBusiness: PokemonBusiness = new PokemonBusiness();

  public async getPokemon (code: number){
      const pokemon = await this.pokemonBusiness.getPokemon(code);
      return JSON.stringify(pokemon);
  }

  public async createPokemon (code: number){
      const pokemon = await this.pokemonBusiness.createPokemon(code);
      return JSON.stringify(pokemon);
  }
}
export default PokemonController;