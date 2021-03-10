import React from "react";
import { SocialIcon } from "react-social-icons";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 20,
  },
}));

const SocialIcons = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <SocialIcon
          className={classes.root}
          url="http://twitter.com/jaketrent"
        />
        <SocialIcon
          className={classes.root}
          url="http://twitter.com/jaketrent"
        />
        <SocialIcon
          className={classes.root}
          url="http://twitter.com/jaketrent"
        />
        <SocialIcon
          className={classes.root}
          url="http://twitter.com/jaketrent"
        />
        <SocialIcon
          className={classes.root}
          url="http://twitter.com/jaketrent"
        />
        <SocialIcon
          className={classes.root}
          url="http://twitter.com/jaketrent"
        />
      </Grid>
    </>
  );
};

export default SocialIcons;
