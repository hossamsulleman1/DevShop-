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
    marginLeft: 50,
    marginRight: 50,
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

const LandingPage = ({ companyName }) => {
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
            lg={5}
          >
            <Typography className={classes.HeadingTitle}>
              Transparency is key.
            </Typography>
            <Divider className={classes.Divider} />

            <Typography variant="body2" color="textSecondary">
              Every now and so the industry changes some say in the right
              direction some in the wrong some in the right however at{" "}
              {companyName} we belive the time for change is now this time in
              the {companyName} direction we dont thrive for the best for
              ourselves or the best for our customers like the many competitors
              claim or maintain customers under invaluable gimmicks and shackles
              we strive for the best for us and for our customers an effective
              layout, reliable and adhear by payment security laws, competetive
              prices and aim to give a informative and transparent shopping
              experience that can be counted on that customers deserve and
              companies should have been giving for everyones best interest.
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
