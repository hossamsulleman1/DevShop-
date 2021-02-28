import React, { useState, createContext, useEffect } from "react";

export const SemContext = createContext();

export const SemProvider = (props) => {
  // STATES
  const [authInfo, setAuthInfo] = useState();

  return (
    <SemContext.Provider value={[authInfo, setAuthInfo]}>
      {props.children}
    </SemContext.Provider>
  );
};
