import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { KeyboardArrowRight } from "@material-ui/icons";
import { KeyboardArrowLeft } from "@material-ui/icons";
import Product from "./../../HomeProduct/Product";
import { IconButton } from "@material-ui/core";
import VerticalItem from "./../VerticalItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flex: "1 0 auto",
    margin: theme.spacing(1),
  },

  title: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontWeight: 600,
    fontSize: "1.7vh",
  },
  margintop: {
    marginTop: 20,
  },
}));

function BasketLook(props) {
  const classes = useStyles();
  const { width } = props;

  return (
    <div className={classes.root}>
      <div className={classes.margintop}>
        <Grid container justify="center" alignItems="center">
          <Typography className={classes.title}>Recomended</Typography>
        </Grid>
      </div>

      <Grid container justify="center" alignItems="center">
        <div className={classes.container}>
          <IconButton disabled>
            <KeyboardArrowLeft />
          </IconButton>

          <Hidden only={["xs"]}>
            <VerticalItem />
          </Hidden>

          <Hidden only={[]}>
            <VerticalItem />
          </Hidden>

          <IconButton disabled>
            <KeyboardArrowRight />
          </IconButton>
        </div>
      </Grid>
    </div>
  );
}

BasketLook.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(BasketLook);
