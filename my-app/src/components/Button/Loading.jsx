import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  div: {
    width: "100vh",
    height: "100vh",
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.div}
    >
      <CircularProgress />
    </Grid>
  );
};

export default Loading;
