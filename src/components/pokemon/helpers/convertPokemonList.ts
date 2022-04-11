import { PokemonResultsType } from "../queries";
import { MyPokemonType, PokemonListType } from "../types";

export const convertPokemonList = (
  data: Array<PokemonResultsType>,
  myPokemon: Array<MyPokemonType>
) => {
  const convertedPokemon: Array<PokemonListType> = data.map(
    (d: PokemonResultsType) => {
      let totalOwned = 0;
      myPokemon.forEach((pokemon) => {
        if (pokemon.name === d.name) {
          totalOwned += 1;
        }
      });
      return {
        id: "#" + d.id,
        name: d.name,
        owned: totalOwned,
        image: d.dreamworld,
      };
    }
  );
  return convertedPokemon;
};
