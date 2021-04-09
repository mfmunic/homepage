import React from "react";
import { render } from "react-dom";

import "./css/index.css";
import { MainPage } from "./components/MainPage";
import { AppProvider } from "./context/appContext";

render(
  // <Provider store={store}>
  <AppProvider>
    <MainPage />
  </AppProvider>,
  // </Provider>,
  document.getElementById("root")
);
