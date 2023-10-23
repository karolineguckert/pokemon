import ServicePokemonAPI from "../service/ServicePokemonAPI";
import ServiceRabbit from "../service/ServiceRabbit";
import PokemonListInterface from "../interface/PokemonListInterface";

class Publisher {
    private servicePokemonAPI : ServicePokemonAPI;
    private serviceRabbit : ServiceRabbit;

    constructor() {
        this.serviceRabbit = new ServiceRabbit();
        this.servicePokemonAPI = new ServicePokemonAPI();
    }

    public async sendPokemonsToQueue (){
        const pokemons: PokemonListInterface [] = await this.getAllPokemons();
        for (let i = 0; i < pokemons.length; i++) {
            let pokemon: PokemonListInterface = pokemons[i];
            await this.serviceRabbit.sendToQueue(pokemon.name);
            console.log(pokemon);
        }
    }

    private async getAllPokemons(): Promise<PokemonListInterface[]>{
        return this.servicePokemonAPI.getAllPokemons();
    }
}
new Publisher().sendPokemonsToQueue().then(() => {
    console.log("finish")
});


