import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import IconButton from "@material-ui/core/IconButton";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";

let image = "https://upload.wikimedia.org/wikipedia/commons/5/58/Link.svg";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    margin: 40,
  },
  media: {
    height: 140,
    width: "100%",
  },
  fab: {
    width: 600,
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default function VerticalItem() {
  const classes = useStyles();

  return (
    <div>
      <Paper elevation={3}></Paper>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Fab className={classes.fab} variant="extended">
            <ShopTwoIcon />
            Basket Look
          </Fab>

          <IconButton aria-label="previous">
            <OpenInNewIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
