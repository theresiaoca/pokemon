import { useLocation } from "react-router-dom";

import { BottomMenuItem, BottomMenuLink, BottomNavbar } from "./BottomNavigationBar";

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

const BottomNavigationBar = () => {
  const location = useLocation();

  return (
    <BottomNavbar>
      {menuList.map((r: { path: string; text: string }, index: number) => (
        <BottomMenuItem key={index}>
          <BottomMenuLink
            className={location.pathname === r.path ? "active" : ""}
            to={r.path}
          >
            {r.text || ""}
          </BottomMenuLink>
        </BottomMenuItem>
      ))}
    </BottomNavbar>
  );
};

export default BottomNavigationBar;
