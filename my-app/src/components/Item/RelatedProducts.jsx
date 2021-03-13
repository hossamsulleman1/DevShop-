import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import { IconButton } from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { SemContext } from "../../SemContext";
import RelatedProduct from "./RelatedProduct";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontWeight: 900,
    fontSize: "1.5vh",
  },
}));

const RelatedProducts = () => {
  const [relatedProducts, setRelatedProducts] = useContext(SemContext);

  let recomendedImg;
  const classes = useStyles();

  function NextProduct() {
    console.log(relatedProducts);
  }

  function PrevProduct() {}

  return (
    <Grid container justify="center" alignItems="center" xs={12}>
      <p className={classes.title}> you may also like </p>

      <Grid container justify="center" alignItems="center" xs={12}>
        <Grid container justify="center" alignItems="center" xs={12}>
          <RelatedProduct />
        </Grid>

        <div>
          <IconButton onClick={NextProduct}>
            <ArrowLeft />
          </IconButton>

          <IconButton onClick={PrevProduct}>
            <ArrowRight />
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
};

export default RelatedProducts;
