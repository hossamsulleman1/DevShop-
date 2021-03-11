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
})); 

function BestSelling(props) {
  const classes = useStyles();
  const { width } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Typography className={classes.title}>Best Selling</Typography>
      </Grid>

      <Grid container justify="center" alignItems="center">
        <div className={classes.container}>
          <Hidden>
            <IconButton disabled>
              <KeyboardArrowLeft />
            </IconButton>
          </Hidden>

          <Hidden only={["lg", "xs"]}>
            <Product
              price="123"
              description="this is the coolest thing ever"
              title="Tiger"
            />
          </Hidden>
          <Hidden only={["sm", "xs"]}>
            <Product
              price="123"
              description="this is the coolest thing ever"
              title="Tiger"
            />
          </Hidden>

          <Hidden only={["lg", "xs"]}>
            <Product
              price="123"
              description="this is the coolest thing ever"
              title="Tiger"
            />
          </Hidden>

          <Hidden only={["md", "sm", "xs"]}>
            <Product
              price="123"
              description="this is the coolest thing ever"
              title="Tiger"
            />
          </Hidden>

          <Hidden only={["md", "sm", "xs"]}>
            <Product
              price="123"
              description="this is the coolest thing ever"
              title="Tiger"
            />
          </Hidden>

          <Hidden only={["md", "sm", "xs"]}>
            <Product
              price="123"
              description="this is the coolest thing ever"
              title="Tiger"
            />
          </Hidden>

          <Hidden only={["sm", "lg"]}>
            <Product
              price="123"
              description="this is the coolest thing ever"
              title="Tiger"
            />
          </Hidden>

          <Hidden only="lg">
            <IconButton disabled>
              <KeyboardArrowRight />
            </IconButton>
          </Hidden>
        </div>
      </Grid>
    </div>
  );
}

BestSelling.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(BestSelling);
