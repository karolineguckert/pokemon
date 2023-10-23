import {model, Schema} from 'mongoose';

interface Pokemon {
  name: String;
  image: String;
  code: Number;
}

const pokemonSchema = new Schema<Pokemon>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  code: { type: Number, required: true },
});

const Pokemon = model('pokemon', pokemonSchema);
export default Pokemon;
