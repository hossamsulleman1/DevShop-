import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import App from "./App";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ffeb3b",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById("root")
);
