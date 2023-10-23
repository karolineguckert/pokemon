interface PokemonResponseInterface {
    data: {
        name: string,
        id: number,
        sprites: {
            front_default: string
        }
    }

}
export default PokemonResponseInterface;