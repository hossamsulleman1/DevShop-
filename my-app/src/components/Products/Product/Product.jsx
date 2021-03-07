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
import LaunchIcon from '@material-ui/icons/Launch';

import { SemContext } from "../../../SemContext.jsx"

const Product = ({ product, onAddToCart }) => {
  const [currentItem, setCurrentItem] = useContext(SemContext);

  const classes = useStyles();

  const handleOpenProduct = async () => {
    setCurrentItem(product);
  };

  console.log(currentItem)

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          component="p"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
      <IconButton aria-label="Open Product" onClick={handleOpenProduct}>
          <LaunchIcon/>
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
