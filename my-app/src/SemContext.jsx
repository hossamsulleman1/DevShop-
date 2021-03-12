import React, { useState, createContext, useEffect } from "react";
import { createMuiTheme } from "@material-ui/core/styles";

export const SemContext = createContext();

export const SemProvider = (props) => {
  // STATES
  const [authInfo, setAuthInfo] = useState();

  const [currentItem, setCurrentItem] = useState();

  const [darkState, setDarkState] = useState(true);

  return (
    <SemContext.Provider
      value={
        ([authInfo, setAuthInfo],
        [darkState, setDarkState],
        [currentItem, setCurrentItem])
      }
    >
      {props.children}
    </SemContext.Provider>
  );
};
