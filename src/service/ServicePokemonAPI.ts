import axios from "axios";
import PokemonListInterface from "../interface/PokemonListInterface";

class ServicePokemonAPI {

    public async getPokemon(code: number | string) {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${code}`);
    }

    public async getAllPokemons(): Promise<PokemonListInterface[]> {
        const pokemons: { data: { results: PokemonListInterface[] } } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        return pokemons.data.results;
    }
}
export default ServicePokemonAPI;