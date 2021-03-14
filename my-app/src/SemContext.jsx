import React, { useState, createContext, useEffect } from "react";
import { createMuiTheme } from "@material-ui/core/styles";

export const SemContext = createContext();

export const SemProvider = (props) => {
  // STATES
  const [authInfo, setAuthInfo] = useState();

  const [currentItem, setCurrentItem] = useState();

  const [darkState, setDarkState] = useState(true);

  const [relatedProducts, setRelatedProducts] = useState([]);

  const [cart, setCart] = useState({});

  return (
    <SemContext.Provider
      value={
        ([authInfo, setAuthInfo],
        [darkState, setDarkState],
        [currentItem, setCurrentItem],
        [relatedProducts, setRelatedProducts],
        [cart, setCart])
      }
    >
      {props.children}
    </SemContext.Provider>
  );
};
