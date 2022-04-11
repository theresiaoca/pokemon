import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import {
  ButtonContainer,
  Card,
  CardContainer,
  Container,
  IDContainer,
  ImageContainer,
  TitleContainer,
} from "../styled";
import { ButtonAction } from "components/palette/Dialog/DialogCss";
import Dialog from "components/palette/Dialog";

import { PokemonContext } from "../PokemonContext";
import { capitalize } from "../helpers/capitalize";

import { MyPokemonType } from "../types";

const MyPokemon = () => {
  const { myPokemon, releasePokemon } = useContext(PokemonContext);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [releasedData, setReleasedData] = useState<{
    name: string;
    nickname: string;
  }>({ name: "", nickname: "" });

  const handleReleaseClick = (name: string, nickname: string) => {
    setReleasedData({ name, nickname });
    setIsOpenDialog(true);
  };

  const handleRelease = (isSubmit: boolean) => {
    if (isSubmit) {
      releasePokemon(releasedData);
    }
    setIsOpenDialog(false);
  };

  return (
    <Container>
      <TitleContainer>My Pokemon List</TitleContainer>
      {!myPokemon.length ? (
        <div>
          <TitleContainer>You haven't catch any pokemon</TitleContainer>
          <ButtonContainer>
          <ButtonAction width={"10%"}><Link to={"/"}>Catch Now</Link></ButtonAction>
          </ButtonContainer>
        </div>
      ) : (
        <CardContainer>
          {myPokemon?.map((pokemon: MyPokemonType, index: number) => (
            <Card key={index}>
              <IDContainer>{pokemon.id}</IDContainer>
              <ImageContainer>
                <img src={pokemon.image} width={100} height={100} alt="pokemon"/>
              </ImageContainer>
              <TitleContainer>{capitalize(pokemon.name)}</TitleContainer>
              <TitleContainer>({pokemon.nickname})</TitleContainer>
              <ButtonContainer>
                <ButtonAction
                  className="secondary"
                  onClick={() =>
                    handleReleaseClick(
                      capitalize(pokemon.name),
                      pokemon.nickname
                    )
                  }
                >
                  Release
                </ButtonAction>
              </ButtonContainer>
            </Card>
          ))}
        </CardContainer>
      )}

      <Dialog
        isOpen={isOpenDialog}
        title={
          <div>
            Release <strong>{releasedData.name}</strong>
          </div>
        }
        message={
          <div>
            Are you sure you want to release{" "}
            <strong>{releasedData.nickname}</strong>?
          </div>
        }
        withCancel
        buttonCancelTitle="Cancel"
        buttonActionTitle="Release"
        onButtonClick={handleRelease}
      />
    </Container>
  );
};
export default MyPokemon;
