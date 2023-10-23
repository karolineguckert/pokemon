import {RequestQuery, ResponseToolkit} from "@hapi/hapi";
import PokemonController from "../controller/PokemonController";

class Routes {
    private pokemonController: PokemonController = new PokemonController();

    constructor() {

    }
    public getPokemonRoutes (rootPath: string) {

        return [
            {
                method: 'GET',
                path: `/${rootPath}/{code}`,
                handler: async (request: RequestQuery, h: ResponseToolkit) => {
                    return this.pokemonController.getPokemon(request.params.code);
                },

            },
            {
                method: 'POST',
                path: `/${rootPath}/{code}`,
                handler: async (request: RequestQuery, h: ResponseToolkit) => {
                    return this.pokemonController.createPokemon(request.params.code);
                },
            }
        ];
    }
}

export default Routes;