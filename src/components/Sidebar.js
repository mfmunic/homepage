import React from "react";

import { Logo } from "./utils/Logo";
import { MenuItem } from "./utils/MenuItem";

export const Sidebar = () => {
  const year = new Date().getFullYear();
  return (
    <div id="sidebar">
      <div>
        <Logo />
        <div id="menu">
          <MenuItem text="About" color="red" />
          <MenuItem text="Resume" color="yellow" />
          <MenuItem text="Portfolio" color="green" />
          <MenuItem text="Contact" color="orange" />
        </div>
      </div>
      <div id="copyright">
        Marc Munic {"\u00A9"} {year}
      </div>
    </div>
  );
};
