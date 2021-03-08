import React, { useEffect, useState, useContext } from "react";
import Footer from "../Footer/Footer";
import { Grid } from "@material-ui/core";
import { SemContext } from "../../SemContext";
import { useHistory } from "react-router-dom";
import PhotoGrid from "./PhotoGrid";

// https://eu.puma.com/uk/en/pd/mirage-tech-trainers/381118.html?dwvar_381118_color=05&dwvar_381118_size=0280#
const Item = () => {
  const [currentItem, setCurrentItem] = useContext(SemContext);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [photo, setPhoto] = useState();
  const [price, setPrice] = useState();
  const [assets, setAssets] = useContext([]);

  let history = useHistory();

  useEffect(() => {
    console.log(currentItem);
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

      setName(currentItem.name);
      setPrice(currentItem.price.formatted_with_symbol);
      setDescription(currentItem.description);
      setPhoto(currentItem.media.source);
      setAssets(currentItem.assets);
    } catch (error) {
      console.log(error);
    }
  }, [currentItem]);

  return (
    <>
      <Grid container>
        <Grid item lg={12}>
          {/* bread crums to collection and item  */}
        </Grid>

        <Grid item lg={8}>
          <PhotoGrid />
        </Grid>

        <Grid item lg={4}>
          <Grid item lg={1 / 3}>
            {/* item name  */}
            <p>{name}</p>
          </Grid>
          <Grid item lg={1 / 3}>
            {/* gutter */}
          </Grid>
          <Grid item lg={1 / 3}>
            {/* price */}
            <p>{price}</p>
            <Grid item lg={12}>
              {/* price of item */}
            </Grid>
            <Grid item lg={12}>
              {/*sub title price is inc 20% vat */}
            </Grid>
          </Grid>

          <Grid item lg={10}>
            {/* buy now btn  */}
          </Grid>

          <Grid container xs={12}>
            {/* sizes  */}
          </Grid>

          <Grid item lg={2}>
            {/* qty button */}
          </Grid>

          <Grid item lg={12}>
            {/* description */}
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </Grid>
          <Grid item lg={12}>
            {/* shipping */}
          </Grid>
        </Grid>
      </Grid>
      <Footer></Footer>
    </>
  );
};

export default Item;
