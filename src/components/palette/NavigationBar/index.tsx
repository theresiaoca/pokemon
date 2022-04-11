import { useLocation } from "react-router-dom";

import {
  LeftNavBar,
  MenuItem,
  MenuLink,
  NavBar,
  RightNavBar,
} from "./NavigationBarCss";

const menuList = [
  {
    path: "/",
    text: "Pokemon List",
  },
  {
    path: "/my-pokemon",
    text: "My Pokemon",
  },
];

const NavigationBar = () => {
  const location = useLocation();

  return (
    <NavBar>
      <LeftNavBar>
        <MenuItem>
          <img
            src="/images/pokemon-logo.png"
            alt="logo"
            width={100}
            className="navbar-logo"
          />
        </MenuItem>
      </LeftNavBar>
      <RightNavBar>
        {menuList.map((r: { path: string; text: string }, index: number) => (
          <MenuItem key={index}>
            <MenuLink
              className={location.pathname === r.path ? "active" : ""}
              to={r.path}
            >
              {r.text || ""}
            </MenuLink>
          </MenuItem>
        ))}
      </RightNavBar>
    </NavBar>
  );
};

export default NavigationBar;
