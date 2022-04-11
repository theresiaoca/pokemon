import React from "react";

import BottomNavigationBar from "components/palette/BottomNavigationBar";
import NavigationBar from "../palette/NavigationBar";

export type MainContainerProps = {
  children: React.ReactElement;
};

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div>
      <NavigationBar />
      {children}
      <BottomNavigationBar />
    </div>
  );
};

export default MainContainer;
