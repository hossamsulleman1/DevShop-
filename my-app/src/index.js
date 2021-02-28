import React, { useContext } from 'react';
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";
import App from "./App";

// CONTEXT API
import { SemProvider } from "./SemContext";



// use sem context change theme button

ReactDOM.render(

  <SemProvider>
  
      <App />
 
  </SemProvider>,

  document.getElementById("root")
);
