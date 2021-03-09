import React from "react";
import { Grid, Divider } from "@material-ui/core";
import VertialItem from "../VerticalItem";
import SmallItem from "../SmallItem";
import { makeStyles } from "@material-ui/core/styles";
import BigImage from "./BigImage";
import SocialIcons from "./../../Footer/SocialIcons";

const useStyles = makeStyles((theme) => ({
  largePhoto: {
    margin: 60,
  },
  PaddingLeft: {
    marginLeft: 10,
  },
  // background,color : 'black'
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={0} md={2}>
          {/* Gutter */}
        </Grid>

        <Grid container>
          <Grid item xs={12} justify="center" alignItems="center">
            <div className={classes.largePhoto}>
              <BigImage />
            </div>
          </Grid>

          <Grid item xs={12} lg={6}>
            <SmallItem />
          </Grid>

          <Grid item xs={12} lg={6}>
            <SmallItem />
          </Grid>

          <Grid
            justify="center"
            alignItems="center"
            className={classes.PaddingLeft}
            xs={12}
            lg={7}
          >
            {/* body */}


<p>Live Life With Us </p>
<Divider/>
<p>chose from a range of streetware to with your daily style. Dont be afraid to rock the hustle in style.</p>

<p>style in comfort in our very own original clothing</p>

<p>dont stop the dream</p>


          </Grid>

          <Grid container justify="center" alignItems="center" xs={12} lg={4}>
            {/* side bar / Bottom */}
            <Grid container xs={0} lg={2}></Grid>
            <VertialItem />
            <VertialItem />

            <div>{/* title */}</div>

            <div>{/* under */}</div>

            <Grid container justify="center" alignItems="center">
              <div>
                <p>Social Media</p>
              </div>
              <Grid alignContent="space-between" xs={12}>
                <SocialIcons />
              </Grid>
            </Grid>
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
