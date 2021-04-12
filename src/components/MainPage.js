import React from "react";

import { Display } from "./Display";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function MainPage() {
  return (
    <div id="fullPage">
      <Sidebar />
      <div id="notSidebar">
        <Header />
        <Display />
      </div>
    </div>
  );
}
