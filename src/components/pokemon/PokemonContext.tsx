import { createContext, useEffect, useState } from "react";
import { MyPokemonType } from "./types";

export type PokemonContextType = {
  myPokemon: Array<MyPokemonType>;
  addPokemon: (newPokemon: MyPokemonType) => void;
  releasePokemon: (data: { name: string; nickname: string }) => void;
};

export const PokemonContext = createContext<PokemonContextType>({
  myPokemon: [],
  addPokemon: () => {},
  releasePokemon: () => {},
});

export const PokemonProvider = (props: any) => {
  const [myPokemon, setMyPokemon] = useState<Array<MyPokemonType>>([]);

  const addPokemon = (newPokemon: MyPokemonType) => {
    const tmpPokemon = [...myPokemon];
    tmpPokemon.push(newPokemon);
    localStorage.setItem("my_pokemon", JSON.stringify(tmpPokemon));
    setMyPokemon(tmpPokemon);
  };

  const releasePokemon = (data: { name: string; nickname: string }) => {
    const tmpPokemon = myPokemon.filter(
      (pokemon) =>
        pokemon.name !== data.name && pokemon.nickname !== data.nickname
    );
    localStorage.setItem("my_pokemon", JSON.stringify(tmpPokemon));
    setMyPokemon(tmpPokemon);
  };

  useEffect(() => {
    if (localStorage.getItem("my_pokemon")) {
      const data: Array<MyPokemonType> = JSON.parse(
        `${localStorage.getItem("my_pokemon")}`
      );
      setMyPokemon(data);
    }
  }, [setMyPokemon]);

  return (
    <PokemonContext.Provider value={{ myPokemon, addPokemon, releasePokemon }}>
      {props.children}
    </PokemonContext.Provider>
  );
};
