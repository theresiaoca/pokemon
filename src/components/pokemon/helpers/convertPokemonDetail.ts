import { PokemonDetailResponseType } from "../queries";
import { PokemonDetailType } from "../types";

export const convertPokemonDetail = (
  data: PokemonDetailResponseType,
  state: any
) => {
  const convertedPokemon: PokemonDetailType = {
    id: "#" + data.id,
    name: data.name,
    image: state?.image || "",
    height: data.height + " cm",
    weight: data.weight + " kg",
    abilities: data.abilities.map((ability) => ability.ability.name),
    moves: data.moves.map((move) => move.move.name),
    stats: data.stats.map((stat) => ({
      baseStat: stat.base_stat,
      name: stat.stat.name,
    })),
    types: data.types.map((type) => type.type.name),
  };

  return convertedPokemon;
};
