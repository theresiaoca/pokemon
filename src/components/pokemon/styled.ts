import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 50px 0;
  margin: 0px 20%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    margin: 0px 30px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export type CardProps = {
  clickable?: boolean;
};

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin: 5px;
  background-image: linear-gradient(#f36363, #fad9d9);
  border-radius: 10px;
  cursor: ${(props: CardProps) => props.clickable && "pointer"};
  box-shadow: 5px 5px #faeaea;

  &:hover {
    transform: ${(props: CardProps) => props.clickable && "scale(0.9)"};
    box-shadow: none;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const IDContainer = styled.div`
  border: 2px solid #db3445;
  border-radius: 10px;
  width: min-content;
  padding: 0 10px;
`;

export const ImageContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

export const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #f36363;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  margin: auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const TitleContainer = styled.div`
  font-weight: bold;
  text-align: center;
  color: #6b595b;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const LinkButton = styled(Link)`
  width: 20%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export type StyledButtonProps = {
  isFullWidth?: boolean;
};

export const StyledButton = styled.button`
  font-weight: bold;
  padding: 10px 15px;
  background-color: #f36363;
  border: none;
  border-radius: 10px;
  color: #fff;
  width: 20%;

  &:hover {
    transform: scale(0.9);
    cursor: pointer;
  }

  &:active {
    background-color: #ab4848;
    transform: scale(0.9);
  }

  @media (max-width: 1200px) {
    width: ${(props: StyledButtonProps) =>
      props.isFullWidth ? "100%" : "20%"};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const OwnedContainer = styled.div`
  text-align: center;
  color: #6b595b;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 5px;
  border: 2px dashed #f36363;
  gap: 10px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  padding: 5px;
  border-radius: 5px;
  width: fit-content;
  border: 2px solid #6b595b;
  box-shadow: 3px 3px #faeaea;
  font-weight: bold;
  color: #6b595b;
`;

export const Divider = styled.hr`
  border: 1px dashed #f36363;
  width: 100%;
`;

export const BasicInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 20%;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const StatsContainer = styled.div`
  margin-left: 20%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const StatsLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StatsBarContainer = styled.div`
  margin-bottom: 10px;
`;

type StatsBarProps = {
  baseStat: number;
};

export const EmptyStatsBar = styled.div`
  width: 100%;
  height: 10px;
  background: #ededed;
  border-radius: 20px;
`;

export const FilledStatsBar = styled.div`
  width: ${(props: StatsBarProps) => `${props.baseStat}%`};
  height: 10px;
  border-radius: 20px;
  background: #fabe3c;
`;

export const ErrorLabel = styled.div`
  font-size: 14px;
  color: red;
`;
