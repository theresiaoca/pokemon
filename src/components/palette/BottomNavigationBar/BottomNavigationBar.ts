import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const BottomNavbar = styled.div`
  overflow: hidden;
  background-color: #ef5350;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: none;
  @media (max-width: 600px) {
    display: flex;
  }
`;

export const BottomMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const BottomMenuLink = styled(Link)`
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  width: 100%;

  &:hover {
    background-color: #d15858;
  }
  &.active {
    background-color: #d32b2b;
  }
`;
