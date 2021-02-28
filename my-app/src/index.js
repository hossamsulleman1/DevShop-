import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";
import App from "./App";

// CONTEXT API
import { SemProvider } from "./SemContext";

const dark = useContext(SemContext);

const [darkState, setDarkState] = useState(false);
const palletType = darkState ? "dark" : "light";
const darkTheme = createMuiTheme({
  palette: {
    type: palletType,
  },
});
const handleThemeChange = () => {
  setDarkState(!darkState);
};

// use sem context change theme button

ReactDOM.render(
  <SemProvider>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </SemProvider>,

  document.getElementById("root")
);
