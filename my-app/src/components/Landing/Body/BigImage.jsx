import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Fab from "@material-ui/core/Fab";
import { Button } from "@material-ui/core";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";

let image = "https://upload.wikimedia.org/wikipedia/commons/5/58/Link.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 60,
    marginBottom:40,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    margin: 60,
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 700,
  },
  margin: {
    margin: 40,
  },

  button: {
    width: 300,
    marginBottom: 10,
  },

  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    margin: 60,
  },
}));

export default function BigImage() {
  const classes = useStyles();

  return (
    <Grid
      container
      container
      alignContent="center"
      justify="center"
      alignItems="center"
    >
      <Card elevation={0} variant="outlined" square className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Live From Space
              <Typography>Mirage Tech</Typography>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {/* collection */}
              Collection #QW2BREEZ
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <div className={classes.margin}>
              <Fab className={classes.button} size="large" variant="extended">
                <ShopTwoIcon />
                Shop now
              </Fab>
              <br />
              <br />
              <br />
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <CardMedia
          className={classes.cover}
          image={image}
          title="Live from space album cover"
        />
      </Card>
    </Grid>
  );
}
