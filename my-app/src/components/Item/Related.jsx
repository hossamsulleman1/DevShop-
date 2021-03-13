import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "10vh",
    height: "10vh",
  },
  root: {
    margin: 20,
    padding: 10,
  },
}));

const Related = ({ title, postage, img, price }) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src={img}
            className={classes.avatar}
          ></Avatar>
        }
        action={
          <div>
            <IconButton aria-label="settings">
              <OpenInBrowserIcon />
            </IconButton>

            <p>{price}</p>
          </div>
        }
        title={title}
        subheader={`Postage in: ${postage}`}
      />
    </Card>
  );
};

export default Related;
