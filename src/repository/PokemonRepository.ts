import Pokemon from "../entity/Pokemon";

class PokemonRepository {

    public async getPokemon (code: number) {
        return Pokemon.find({code: code}).exec();
    }

    public async createPokemon (name: string, image: string, code: number) {
        const isPokemonExist = await this.isPokemonExist(code);

        if(!isPokemonExist){
           return Pokemon.create({
                name: name,
                code: code,
                image: image
            });
        }
        return null;
    }

    private async isPokemonExist (code: number){
       return Pokemon.exists({code: code}).exec();
    }
}
export default PokemonRepository;