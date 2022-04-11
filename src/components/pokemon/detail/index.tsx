import React, { useContext, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useLocation, useParams } from "react-router";

import {
  BasicInfo,
  BasicInfoContainer,
  Container,
  Divider,
  EmptyStatsBar,
  FilledStatsBar,
  ImageContainer,
  InfoContainer,
  Loader,
  StatsBarContainer,
  StatsContainer,
  StatsLabelContainer,
  StyledButton,
  Tag,
  TagContainer,
  TitleContainer,
} from "../styled";
import Dialog from "components/palette/Dialog";
import Input from "components/palette/Input";

import { PokemonContext } from "../PokemonContext";
import { convertPokemonDetail } from "../helpers/convertPokemonDetail";
import { capitalize } from "../helpers/capitalize";

import { GetPokemonDetailResponseType, GET_POKEMON_DETAIL } from "../queries";
import { MyPokemonType, PokemonDetailType, StatType } from "../types";

const INITIAL_DATA: PokemonDetailType = {
  id: "",
  name: "",
  abilities: [],
  weight: "",
  height: "",
  image: "",
  moves: [],
  stats: [],
  types: [],
};

const PokemonDetail = () => {
  const { addPokemon } = useContext(PokemonContext);
  const { name } = useParams();
  const location = useLocation();
  const [pokemon, setPokemon] = useState<PokemonDetailType>(INITIAL_DATA);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [pokemonNickname, setPokemonNickname] = useState("");

  const [getPokemonDetail, { loading }] =
    useLazyQuery<GetPokemonDetailResponseType>(GET_POKEMON_DETAIL, {
      variables: {
        name: name,
      },
      onCompleted(data) {
        if (data.pokemon.id) {
          const convertedPokemon = convertPokemonDetail(
            data.pokemon,
            location.state
          );
          setPokemon(convertedPokemon);
        }
      },
    });

  const handleOpenDialog = () => {
    const successRate = Math.random();
    if (successRate <= 0.5) {
      setIsFailed(true);
    } else {
      setIsFailed(false);
    }
    setIsOpenDialog(true);
  };

  const handleCatch = (isSubmit: boolean) => {
    if (isSubmit) {
      const newPokemon: MyPokemonType = {
        id: pokemon.id,
        image: pokemon.image,
        name: pokemon.name,
        nickname: pokemonNickname,
      };
      addPokemon(newPokemon);
    }
    setIsOpenDialog(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPokemonNickname(value);
  };

  useEffect(() => {
    if (name) {
      getPokemonDetail();
    }
  }, [getPokemonDetail, name]);

  const message = (
    <div>
      <Input
        label="Give Nickname"
        type="text"
        onChange={handleChange}
        value={pokemonNickname}
      />
    </div>
  );

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        pokemon && (
          <div>
            <InfoContainer>
              <BasicInfoContainer>
                <ImageContainer>
                  <img src={pokemon.image} width={200} alt="pokemon" />
                </ImageContainer>
                <BasicInfo>
                  <TitleContainer>
                    {pokemon.id} {pokemon.name.toUpperCase()}
                  </TitleContainer>
                  <TagContainer>
                    {pokemon.types.map((type: string, index: number) => (
                      <Tag key={index}>{capitalize(type)}</Tag>
                    ))}
                  </TagContainer>

                  <TitleContainer>Height: {pokemon.height}</TitleContainer>

                  <TitleContainer>Weight: {pokemon.weight}</TitleContainer>
                </BasicInfo>

                <StatsContainer>
                  <TitleContainer>Stats</TitleContainer>
                  {[
                    pokemon.stats.map((stat: StatType, index: number) => (
                      <StatsBarContainer>
                        <StatsLabelContainer key={index}>
                          <TitleContainer>{stat.name}</TitleContainer>
                          <TitleContainer>{stat.baseStat}</TitleContainer>
                        </StatsLabelContainer>

                        <EmptyStatsBar>
                          <FilledStatsBar
                            baseStat={stat.baseStat}
                          ></FilledStatsBar>
                        </EmptyStatsBar>
                      </StatsBarContainer>
                    )),
                  ]}
                </StatsContainer>
              </BasicInfoContainer>

              <StyledButton onClick={handleOpenDialog} isFullWidth>
                Catch Pokemon
              </StyledButton>

              <Divider />

              <TitleContainer>Ability</TitleContainer>
              <TagContainer>
                {pokemon.abilities.map((ability: string, index: number) => (
                  <Tag key={index}>{capitalize(ability)}</Tag>
                ))}
              </TagContainer>

              <Divider />

              <TitleContainer>Moves</TitleContainer>
              <TagContainer>
                {pokemon.moves.map((move: string, index: number) => (
                  <Tag key={index}>{capitalize(move)}</Tag>
                ))}
              </TagContainer>
            </InfoContainer>
          </div>
        )
      )}
      <Dialog
        isOpen={isOpenDialog}
        title={
          isFailed ? (
            <div>Oops! {name} run away...</div>
          ) : (
            <div>
              You have catch a <strong>{name}</strong>!
            </div>
          )
        }
        message={!isFailed ? message : ""}
        withCancel={!isFailed}
        buttonCancelTitle="Release"
        buttonActionTitle={!isFailed ? "Save" : "Close"}
        onButtonClick={handleCatch}
      />
    </Container>
  );
};
export default PokemonDetail;
