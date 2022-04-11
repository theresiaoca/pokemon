import { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router";

import {
  ButtonContainer,
  Card,
  CardContainer,
  Container,
  IDContainer,
  ImageContainer,
  Loader,
  StyledButton,
  OwnedContainer,
  TitleContainer,
} from "../styled";

import { PokemonContext } from "../PokemonContext";
import { convertPokemonList } from "../helpers/convertPokemonList";
import { capitalize } from "../helpers/capitalize";

import { GetPokemonResponseType, GET_POKEMONS } from "../queries";
import { PokemonListType } from "../types";

const PokemonList = () => {
  const { myPokemon } = useContext(PokemonContext);
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const [isInitialLimit, setIsInitialLimit] = useState(false);
  const [total, setTotal] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [pokemons, setPokemons] = useState<Array<PokemonListType>>();

  const { loading, data, fetchMore } = useQuery<GetPokemonResponseType>(
    GET_POKEMONS,
    {
      variables: {
        limit: 50,
        offset: 0,
      },
    }
  );

  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    try {
      if (offset <= total) {
        const tmpOffset = isInitialLimit ? offset + 50 : offset + 10;
        const res = await fetchMore({
          variables: {
            limit: 10,
            offset: tmpOffset,
          },
        });

        setOffset(tmpOffset);
        setIsInitialLimit(false);
        const data = convertPokemonList(res.data.pokemons.results, myPokemon);
        if (pokemons && pokemons.length) {
          setPokemons([...pokemons, ...data]);
        } else {
          setPokemons([...data]);
        }
        setIsLoadingMore(false);
      }
    } catch (err) {
      setIsLoadingMore(true);
    }
  };

  const handleCardClick = (name: string, image: string) => {
    navigate(`/pokemon/${name}`, { state: { image: image } });
  };

  useEffect(() => {
    if (data) {
      const convertedPokemons = convertPokemonList(
        data.pokemons.results,
        myPokemon
      );
      setTotal(data.pokemons.count);
      setIsInitialLimit(true);
      setPokemons(convertedPokemons);
    }
  }, [data, myPokemon]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CardContainer>
            {pokemons?.map((pokemon: PokemonListType, index: number) => (
              <Card
                onClick={() => handleCardClick(pokemon.name, pokemon.image)}
                key={index}
                clickable={true}
              >
                <IDContainer>{pokemon.id}</IDContainer>
                <ImageContainer>
                  <img
                    src={pokemon.image}
                    width={100}
                    height={100}
                    alt="pokemon"
                  />
                </ImageContainer>
                <TitleContainer>{capitalize(pokemon.name)}</TitleContainer>
                <OwnedContainer>Owned: {pokemon.owned}</OwnedContainer>
              </Card>
            ))}
          </CardContainer>
          <ButtonContainer>
            {isLoadingMore ? (
              <Loader />
            ) : (
              <StyledButton onClick={handleLoadMore}>Load More</StyledButton>
            )}
          </ButtonContainer>
        </>
      )}
    </Container>
  );
};
export default PokemonList;
