import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const NavBar = styled.div`
  display: flex;
  background-color: #ef5350;
  padding-left: 10px;
  justify-content: space-between;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuLink = styled(Link)`
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

  &:hover {
    background-color: #d15858;
  }
  &.active {
    background-color: #d32b2b;
  }
`;

export const LeftNavBar = styled.div`
  display: flex;
`;

export const RightNavBar = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: none;
  }
`;
