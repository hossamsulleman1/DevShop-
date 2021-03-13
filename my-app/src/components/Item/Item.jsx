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

import { Link } from "react-router-dom";
import Loading from "../Button/Loading";
import RelatedProducts from "./RelatedProducts";

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
    maxWidth: 500,
  },
  img: {
    width: "35vh",
    height: "35vh",
  },
  icon: {
    marginRight: 20,
  },
  Pci: {
    width: "40%",
    marginTop: 10,
    maxWidth: 400,
  },
}));

const Item = ({ onAddToCart, product, image, itemPrice, title }) => {
  const [currentItem, setCurrentItem] = useContext(SemContext);
  const [purchaseUrl, setPurchaseUrl] = useContext(SemContext);
  const [relatedProduts, setRelatedProducts] = useContext(SemContext);

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [photo, setPhoto] = useState();
  const [productId, setProductId] = useState();
  const [price, setPrice] = useState();
  const [variants, setVariants] = useState();
  const [sizes, setSizes] = useState();
  const [assets, setAssets] = useContext(SemContext);

  let history = useHistory();

  useEffect(() => {
    // remove if not fixed
    console.log(product.id);
    setProductId(product.id);
    // SAME ITEM DIF PATHS FROM CONEXT VS PROPS  ^ and under
    setPurchaseUrl(product.checkout_url.checkout);
    setRelatedProducts(product.related_products);
  }, [currentItem]);

  function BuyNow() {
    console.log(product.checkout_url.checkout);
    window.location.replace(product.checkout_url.checkout);
  }

  function AddToCart({ onAddtoCart, product }) {
    try {
      // onAddToCart(productId, 1);
      console.log(product.id);
      console.log(productId);
    } catch (error) {
      console.log(error);
    }
  }

  const classes = useStyles();

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

        <Grid container justify="center" alignItems="center" xs={12}>
          <img
            src="https://www.acunetix.com/wp-content/uploads/2012/10/PCI-DSS.png"
            alt="Pci Compliance"
            component={Link}
            to="https://www.pcicomplianceguide.org/faq/#1"
            className={classes.Pci}
            href="https://www.pcicomplianceguide.org/faq/#1"
          />

          <RelatedProducts />

          {/* link this link in image  */}
        </Grid>
      </Grid>
    </>
    // <p dangerouslySetInnerHTML={{ __html: description }}></p>
  );
};

export default Item;
