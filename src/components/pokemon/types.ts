export type PokemonListType = {
  id: string;
  name: string;
  owned: number;
  image: string;
};

export type PokemonDetailType = {
  id: string;
  name: string;
  image: string;
  height: string;
  weight: string;
  abilities: Array<string>;
  moves: Array<string>;
  types: Array<string>;
  stats: Array<StatType>;
};

export type MoveType = {
  name: string;
  url: string;
};

export type StatType = {
  name: string;
  baseStat: number;
};

export type MyPokemonType = Omit<PokemonListType, "owned"> & {
  nickname: string;
};
