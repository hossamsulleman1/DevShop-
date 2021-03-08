import React from "react";
import Grid from "@material-ui/core/Grid";
import Footer from "../../Footer/Footer";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import SmallItem from "../SmallItem";
import VerticalItem from "../VerticalItem";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import BigImage from "./BigImage";

const useStyles = makeStyles((theme) => ({
  div: {
    marginTop: 80,
  },
  image: {
    margin: 80,
  },
  margin: {
    margin: 80,
  },
}));

let image = "https://upload.wikimedia.org/wikipedia/commons/5/58/Link.svg";

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      {/* puma as inspo */}
      <Grid container spacing={3}>
        <Grid xs={12}>
          <BigImage />
        </Grid>

        <Grid container xs={12}>
          <div className={classes.margin}>
            {/* subtitle*/}
            <p className="SubHeading">From the link collection 2021</p>
          </div>
        </Grid>

        <Grid container xs={2}>
          {/* gutter*/}
        </Grid>

        <Grid container xs={2}>
          {/* small product*/}
          <SmallItem />
        </Grid>

        <Grid container xs={2}>
          {/* small product*/}
          <SmallItem />
        </Grid>

        <Grid container xs={2}>
          {/* small product*/}
          <SmallItem />
        </Grid>

        <Grid container xs={2}>
          {/* small product*/}
          <SmallItem />
        </Grid>

        <Grid container xs={2}>
          {/* gutter*/}
        </Grid>

        <Grid
          container
          alignContent="center"
          justify="center"
          alignItems="center"
          xs={12}
          className={classes.image}
        >
          {/* image*/}
          <img src={image} alt="" />
        </Grid>

        <Grid container xs={12}>
          {/* title */}
        </Grid>

        <Grid container xs={12}>
          {/* subheading*/}
        </Grid>

        <Grid container xs={12}>
          {/* button*/}
        </Grid>

        <Grid container xs={2}>
          {/* gutter*/}
        </Grid>

        <Grid container xs={2}>
          {/* small product*/}
          <SmallItem />
        </Grid>

        <Grid container xs={2}>
          {/* small product*/}
          <SmallItem />
        </Grid>

        <Grid container xs={2}>
          {/* small product*/}
          <SmallItem />
        </Grid>

        <Grid container xs={2}>
          {/* small product*/}
          <SmallItem />
        </Grid>

        <Grid container xs={2}>
          {/* gutter*/}
        </Grid>

        <Grid container xs={12}>
          {/* image  */}
        </Grid>

        <Grid container xs={12}>
          {/* title  */}
        </Grid>

        <Grid container xs={12}>
          {/* subheading  */}
        </Grid>

        <Grid className={classes.margin} container xs={12}>
          {/* button */}
          <Button color="secondary"></Button>
        </Grid>

        <Grid container xs={12}>
          {/* para */}
        </Grid>

        <Grid container xs={12}>
          {/* learn more button */}
          {/* <Button variant="contained" color="secondary">
            Learn More
          </Button> */}
        </Grid>

        {/* magrgin */}
        <Grid container lg={1 / 3}>
          {/* img */}
        </Grid>

        <Grid container lg={1 / 3}>
          {/* img*/}
        </Grid>

        <Grid container lg={1 / 3}>
          {/* img */}
        </Grid>
        {/* margin */}

        <Grid
          container
          alignContent="center"
          justify="center"
          alignItems="center"
          spacing={10}
        >
          <Grid container lg={2}>
            {/* mini shop item  */}
            <VerticalItem />
          </Grid>
          <Grid container lg={2}>
            {/* mini shop item  */}
            <VerticalItem />
          </Grid>
          <Grid container lg={2}>
            {/* mini shop item  */}
            <VerticalItem />
          </Grid>

          <Grid container lg={2}>
            {/* mini shop item  */}
            <VerticalItem />
          </Grid>

          <Grid container lg={2}>
            {/* mini shop item  */}
            <VerticalItem />
          </Grid>

         
        </Grid>

        <div className={classes.margin}>
          <Grid container xs={12}>
            {/* summary title*/}
            <p className="HomeTitleMedium">about us</p>
          </Grid>

          <Grid container xs={12}>
            {/* summary para */}
            <p>
              with 0 years in web development we strive for the best for me for
              u for me and for u
            </p>
          </Grid>
        </div>

        <Grid container xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
