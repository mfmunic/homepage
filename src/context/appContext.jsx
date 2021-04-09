import _ from "lodash";
import React, { useState, createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = (props) => {
  const initState = { location: "Homepage", color: "blue", toolbar: "default" };
  const [state, setState] = useState(initState);
  const updateState = (newState) => {
    setState(_.merge(initState, newState));
  };
  return <AppContext.Provider value={{ updateState, location: state.location, color: state.color, toolbar: state.toolbar }}>{props.children}</AppContext.Provider>;
};
