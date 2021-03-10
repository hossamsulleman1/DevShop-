import React from "react";
import Image from "../../../assets/rainbowblur.png";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  div: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${Image})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexFlow: "column nowrap",
  },

  title: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontWeight: 900,
    fontSize: "5vh",
  },
});

const ImageDiv = () => {
  const classes = useStyles();

  return (
    <div className={classes.div} src={Image}>
      <Typography className={classes.title}>REINVENTED.</Typography>
      {/* <Typography className={classes.title}>REJUVINATED.</Typography> */}
      <Typography className={classes.title}>STREET-WEAR.</Typography>
      <Typography className={classes.title}>ANY-WEAR.</Typography>

      <div className="next-page">
        <IconButton  size="medium" className={classes.nextPage}>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ImageDiv;
