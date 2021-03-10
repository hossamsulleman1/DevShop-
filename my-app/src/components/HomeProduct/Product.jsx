import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import LaunchIcon from "@material-ui/icons/Launch";

import { SemContext } from "../../SemContext";
import { useHistory } from "react-router-dom";

let image = "https://upload.wikimedia.org/wikipedia/commons/5/58/Link.svg";

const Product = ({ product, onAddToCart, price, title, description }) => {
  let history = useHistory();

  const [currentItem, setCurrentItem] = useContext(SemContext);

  const classes = useStyles();

  const handleOpenProduct = async () => {
    setCurrentItem(product);
    console.log(currentItem);
    history.push("/item");
  };

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            £{price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Open Product" onClick={handleOpenProduct}>
          <LaunchIcon />
        </IconButton>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
        <IconButton
          component={Link}
          to="/Market"
          aria-label="Favorite"
          onClick={handleAddToCart}
        >
          <FavoriteBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
