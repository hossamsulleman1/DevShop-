import React, { useState, useContext } from "react";
import FlashOffIcon from "@material-ui/icons/FlashOff";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { Fab, IconButton } from "@material-ui/core";
import { SemContext } from "./../../SemContext";

const DarkMode = () => {
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const [darkState, setDarkState] = useContext(SemContext);

  let Icon;

  if (darkState == true) {
    Icon = <FlashOnIcon />;
  } else {
    Icon = <FlashOffIcon />;
  }

  return (
    <Fab variant="small" onClick={handleThemeChange}>
      {Icon}
    </Fab>
  );
};

export default DarkMode;
