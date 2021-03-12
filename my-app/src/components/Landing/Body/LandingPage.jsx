import React from "react";
import { Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SocialIcons from "./../../Footer/SocialIcons";
import Footer from "../../Footer/Footer";
import ImageDiv from "./ImageDiv";
import Typography from "@material-ui/core/Typography";
import Product from "../../HomeProduct/Product";
import { KeyboardArrowRight } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { KeyboardArrowLeft } from "@material-ui/icons";
import BestSelling from "../Body/BestSelling";
import BasketLook from "./BasketLook";

const useStyles = makeStyles((theme) => ({
  largePhoto: {
    margin: 60,
  },
  PaddingLeft: {
    marginLeft: 60,
    marginRight: 60,
  },
  HeadingTitle: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontWeight: 900,
    fontSize: "5vh",
  },
  Heading: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontWeight: 1000,
    fontSize: "1.7vh",
    // change font
  },
  Subtitle: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontWeight: 600,
    fontSize: "1.7vh",
    // change font
  },
  Divider: {
    marginBottom: "40px",
    marginTop: "20px",
    // change font
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={0} md={2}>
          {/* Gutter */}
        </Grid>

        <Grid container justify="center" alignItems="center" spacing={4}>
          <Grid item xs={12} justify="center" alignItems="center">
            <ImageDiv />
          </Grid>

          <Grid container xs={12} justify="center" alignItems="center">
            <BestSelling />
          </Grid>

          <Grid
            justify="center"
            alignItems="center"
            className={classes.PaddingLeft}
            xs={12}
            lg={6}
          >
            {/* body */}

            <Typography className={classes.HeadingTitle}>
              In with the new.
            </Typography>
            <Divider className={classes.Divider} />
            <Typography variant="body2" color="textSecondary">
              We belive the industry is outdated
            </Typography>

            <Typography variant="body2" color="textSecondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>

            <Typography variant="body2" color="textSecondary">
              dont stop the dream
            </Typography>
          </Grid>

          <Grid container justify="center" alignItems="center" xs={12} lg={4}>
            {/* side bar / Bottom */}

            <BasketLook />

            <div>{/* title */}</div>

            <div>{/* under */}</div>

            <Grid container justify="center" alignItems="center"></Grid>
          </Grid>
        </Grid>

        <Grid item xs={0} md={2}>
          {/* gutter */}
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
