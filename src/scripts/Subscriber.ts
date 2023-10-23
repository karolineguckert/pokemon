import PokemonBusiness from "../business/PokemonBusiness";
import ServiceRabbit from "../service/ServiceRabbit";
import ServiceMongo from "../service/ServiceMongo";

class Subscriber {
    private pokemonBusiness: PokemonBusiness;
    private serviceRabbit: ServiceRabbit;

    constructor() {
        this.pokemonBusiness = new PokemonBusiness();
        this.serviceRabbit = new ServiceRabbit();
    }
    public async consumePokemonsFromQueue(){
        await this.serviceRabbit.consumeToQueue( async (message: string) => this.createPokemon(message));
    }

    public async createPokemon(name: string): Promise<boolean>{
       const result = await this.pokemonBusiness.createPokemon(name);
       return result !== null;
    }
}

const mongo = new ServiceMongo();
mongo.createMongoConnection().then(() => {
    new Subscriber().consumePokemonsFromQueue().then(() => {
        console.log("Finish")
    });
});