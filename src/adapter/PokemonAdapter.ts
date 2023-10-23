import PokemonInterface from "../interface/PokemonInterface";
import PokemonResponseInterface from "../interface/PokemonResponseInterface";

class PokemonAdapter {

    public async createPokemon (response: PokemonResponseInterface) : Promise<PokemonInterface> {
        return {
            name: response.data.name,
            code: response.data.id,
            image: response.data.sprites.front_default
        }
    }
}
export default PokemonAdapter;