import React, { useEffect, useState, useContext } from "react";
import Footer from "../Footer/Footer";
import { Grid } from "@material-ui/core";
import { SemContext } from "../../SemContext";
import { useHistory } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import ShopIcon from "@material-ui/icons/Shop";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

// https://eu.puma.com/uk/en/pd/mirage-tech-trainers/381118.html?dwvar_381118_color=05&dwvar_381118_size=0280#

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    marginTop: 30,
  },

  title: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontWeight: 900,
    fontSize: "1.5vh",
  },
  fab: {
    margin: 40,
    width: "50%",
  },
  fab: {
    margin: 40,
    width: "50%",
    marginBottom: 5,
  },
  img: {
    width: "45vh",
    height: "auto",
  },
  icon: {
    marginRight: 20,
  },
}));

const Item = ({ onAddToCart, product, image, itemPrice, title }) => {
  const [currentItem, setCurrentItem] = useContext(SemContext);
  const [purchaseUrl, setPurchaseUrl] = useContext(SemContext);

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [photo, setPhoto] = useState();
  const [productId, setProductId] = useState();
  const [price, setPrice] = useState();
  const [variants, setVariants] = useState();
  const [sizes, setSizes] = useState();
  const [assets, setAssets] = useContext(SemContext);

  let history = useHistory();

  function BuyNow({ product, currentItem }) {
    try {
      window.location.replace(purchaseUrl);
      console.log("Redirect Triggered");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(currentItem);
    // SAME ITEM DIF PATHS FROM CONEXT VS PROPS  ^ and under
    console.log(product);
    setPurchaseUrl(product.checkout_url.checkout);
    let url = product.checkout_url.checkout;
    console.log("useEffect");
    try {
      if (currentItem == null || undefined) {
        return (
          (
            <Grid justify="center" alignItems="center">
              <circularProgress />
            </Grid>
          ),
          history.push("/shop")
        );
      }
    } catch (error) {
      console.log(error);
    }
  }, [currentItem]);

  const classes = useStyles();


  

  function AddToCart({ onAddtoCart, product }) {
    try {
      onAddToCart(product.id, 1);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Grid container justify="center" alignItems="center" xs={12}>
        <p className={classes.title}> {title} </p>
      </Grid>

      <Grid container justify="center" alignItems="center" xs={12}>
        <img src={image} className={classes.img} alt="" />
      </Grid>

      <Grid container justify="center" alignItems="center" xs={12}>
        <div className={classes.root}>
          <LinearProgress variant="determinate" value={100} />
        </div>
        {/* see docs for image progress eg 4th photo out of 8 */}
      </Grid>

      <Grid container justify="center" alignItems="center" xs={12}>
        <div>
          <IconButton>
            <ArrowLeft />
          </IconButton>

          <IconButton>
            <ArrowRight />
          </IconButton>
        </div>
      </Grid>

      <Grid container justify="center" alignItems="center" xs={12}>
        <p className={classes.title}> £{itemPrice}</p>
      </Grid>

      <Grid container justify="center" alignItems="center" xs={12}>
        <p className={classes.title}>variation</p>
      </Grid>

      <Divider />

      <Grid container xs={12}>
        {/* sizes */}
      </Grid>

      <Grid container justify="center" alignItems="center" xs={12}>
        <Fab onClick={AddToCart} className={classes.fab} variant="extended">
          <ShoppingBasketIcon className={classes.icon} />
          basket
        </Fab>
        <Fab
          onClick={BuyNow}
          className={classes.fab}
          color="secondary "
          variant="extended"
        >
          <ShopIcon className={classes.icon} />
          Buy now
        </Fab>
      </Grid>

      <Grid container justify="center" alignItems="center" xs={12}>
        <p className={classes.title}> you may also like </p>

        <Grid container justify="center" alignItems="center" xs={12}>
          <div>
            <IconButton>
              <ArrowLeft />
            </IconButton>

            <IconButton>
              <ArrowRight />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </>
    // <p dangerouslySetInnerHTML={{ __html: description }}></p>
  );
};

export default Item;
