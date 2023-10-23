import PokemonAdapter from "../adapter/PokemonAdapter";
import ServicePokemonAPI from "../service/ServicePokemonAPI";
import PokemonRepository from "../repository/PokemonRepository";
import PokemonInterface from "../interface/PokemonInterface";
import PokemonResponseInterface from "../interface/PokemonResponseInterface";

class PokemonBusiness {
    private pokemonAdapter: PokemonAdapter;
    private servicePokemonAPI: ServicePokemonAPI;
    private pokemonRepository: PokemonRepository;

    constructor() {
        this.pokemonAdapter = new PokemonAdapter();
        this.servicePokemonAPI = new ServicePokemonAPI();
        this.pokemonRepository = new PokemonRepository();
    }

    public async getPokemon (code: number){
        return this.pokemonRepository.getPokemon(code);
    }

    // Create pokemon by id or name
    public async createPokemon (code: number | string){
        const response: PokemonResponseInterface = await this.getPokemonFromAPI(code);

        const responseAdapted: PokemonInterface = await this.pokemonAdapter.createPokemon(response);

        return this.pokemonRepository.createPokemon(responseAdapted.name, responseAdapted.image, responseAdapted.code);
    }

    private async getPokemonFromAPI(code: number | string){
        return this.servicePokemonAPI.getPokemon(code);
    }
}
export default PokemonBusiness;