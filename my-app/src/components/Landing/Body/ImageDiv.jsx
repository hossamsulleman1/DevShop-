import React from "react";
import Image from "../../../assets/rainbowblur.png";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";
import Button from "@material-ui/core/Button";
import BottomDrawerHome from "./../../Button/BottomDrawerHome";

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
  buttons: {
    margin: 10,
  },
  icon: {
    margin: 10,
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

      <Grid container justify="center" alignItems="center">
        <div className={classes.buttons}>
          <Fab variant="extended">
            Shop All
            <ShopTwoIcon className={classes.icon} />
          </Fab>
        </div>

        <div className={classes.buttons}>
          <BottomDrawerHome />
        </div>
      </Grid>

      <div className="next-page">
        <IconButton size="medium" className={classes.nextPage}>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ImageDiv;
