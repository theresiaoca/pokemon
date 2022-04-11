import { convertPokemonDetail } from "../convertPokemonDetail";

import { PokemonDetailResponseType } from "components/pokemon/queries";
import { PokemonDetailType } from "components/pokemon/types";

describe("Test helper: convertPokemonDetails", () => {
  test("Given all data, return converted detail", () => {
    const data: PokemonDetailResponseType = {
      id: 1,
      name: "bulbasaur",
      height: 7,
      weight: 69,
      abilities: [
        {
          ability: {
            name: "overgrow",
          },
        },
      ],
      moves: [
        {
          move: {
            name: "razor-wind",
          },
        },
      ],
      types: [
        {
          type: {
            name: "grass",
          },
        },
      ],
      stats: [
        {
          base_stat: 45,
          stat: {
            name: "hp",
          },
        },
        {
          base_stat: 49,
          stat: {
            name: "attack",
          },
        },
        {
          base_stat: 49,
          stat: {
            name: "defense",
          },
        },
        {
          base_stat: 65,
          stat: {
            name: "special-attack",
          },
        },
        {
          base_stat: 65,
          stat: {
            name: "special-defense",
          },
        },
        {
          base_stat: 45,
          stat: {
            name: "speed",
          },
        },
      ],
    };

    const state: any = {
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    };

    const res: PokemonDetailType = {
      id: "#1",
      name: "bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      height: "7 cm",
      weight: "69 kg",
      abilities: ["overgrow"],
      moves: ["razor-wind"],
      stats: [
        {
          baseStat: 45,
          name: "hp",
        },
        {
          baseStat: 49,
          name: "attack",
        },
        {
          baseStat: 49,
          name: "defense",
        },
        {
          baseStat: 65,
          name: "special-attack",
        },
        {
          baseStat: 65,
          name: "special-defense",
        },
        {
          baseStat: 45,
          name: "speed",
        },
      ],
      types: ["grass"],
    };

    expect(convertPokemonDetail(data, state)).toEqual(res);
  });

  test("Given all data, return converted detail", () => {
    const data: PokemonDetailResponseType = {
      id: 1,
      name: "bulbasaur",
      height: 7,
      weight: 69,
      abilities: [
        {
          ability: {
            name: "overgrow",
          },
        },
      ],
      moves: [
        {
          move: {
            name: "razor-wind",
          },
        },
      ],
      types: [
        {
          type: {
            name: "grass",
          },
        },
      ],
      stats: [],
    };

    const res: PokemonDetailType = {
      id: "#1",
      name: "bulbasaur",
      image: "",
      height: "7 cm",
      weight: "69 kg",
      abilities: ["overgrow"],
      moves: ["razor-wind"],
      stats: [],
      types: ["grass"],
    };

    expect(convertPokemonDetail(data, undefined)).toEqual(res);
  });
});
