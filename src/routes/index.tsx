import { lazy } from "react";

const PokemonList = lazy(() => import("components/pokemon/list/PokemonList"));
const PokemonDetail = lazy(() => import("components/pokemon/detail"));
const MyPokemon = lazy(() => import("components/pokemon/list/MyPokemon"));

export type RouteType = {
  url: string;
  component: any;
  text?: string;
};

export const route: Array<RouteType> = [
  {
    url: "/",
    component: <PokemonList />,
    text: "Pokemon List",
  },
  {
    url: "/my-pokemon",
    component: <MyPokemon />,
    text: "My Pokemon",
  },
  {
    url: "/pokemon/:name",
    component: <PokemonDetail />,
    text: "Pokemon Detail",
  },
];
