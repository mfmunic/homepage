import React from "react";
import { render } from "react-dom";

import './sass/endex.css';
import { MainPage } from "./components/MainPage";
import { AppProvider } from "./context/appContext";

render(
  <AppProvider>
    <MainPage />
  </AppProvider>,
  document.getElementById("root")
);
