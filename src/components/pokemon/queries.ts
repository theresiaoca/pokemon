import { gql } from "@apollo/client";
import { MoveType } from "./types";

export type GetPokemonResponseType = {
  pokemons: {
    count: number;
    results: Array<PokemonResultsType>;
  };
};

export type PokemonResultsType = {
  id: number;
  name: string;
  dreamworld: string;
};

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        id
        name
        dreamworld
      }
    }
  }
`;

export type GetPokemonDetailResponseType = {
  pokemon: PokemonDetailResponseType;
};

export type PokemonDetailResponseType = {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: Array<{ ability: { name: string } }>;
  moves: Array<{ move: { name: string } }>;
  types: Array<{ type: { name: string } }>;
  stats: Array<StatType>;
};

export type StatType = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export const GET_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`;
