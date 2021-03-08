import React from "react";
import { Grid, Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  margin: {
    margin: 40,
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.margin}>
      <Divider />
      <Grid container>
        <Grid container lg={4}>
          <Grid item lg={12}>
            {/* logo*/}
          </Grid>
          <Grid item lg={12}>
            {/* divider */}
          </Grid>

          <Grid item lg={12}>
            {/* support title */}
          </Grid>

          <Grid item lg={6}>
            {/* left */}
          </Grid>

          <Grid item lg={6}>
            {/* right  */}
          </Grid>
        </Grid>

        <Grid container lg={4}>
          <Grid item lg={12}>
            {/* gutter*/}
          </Grid>
          <Grid item lg={12}>
            {/* divider */}
          </Grid>

          <Grid item lg={12}>
            {/* about title */}
          </Grid>

          <Grid item lg={6}>
            {/* left */}
          </Grid>

          <Grid item lg={6}>
            {/* right */}
          </Grid>
        </Grid>

        <Grid container lg={1}>
          {/* gutter */}
        </Grid>

        <Grid container lg={3}>
          <Grid item lg={12}>
            {/* sign up to news letter title */}
          </Grid>
          <Grid item lg={12}>
            {/* sign up button */}
          </Grid>

          <Grid item lg={12}>
            {/* folllow us title */}
          </Grid>

          <Grid item lg={2}>
            {/* folllow us title */}
          </Grid>
          <Grid item lg={2}>
            {/* socials */}
          </Grid>
          <Grid item lg={2}>
            {/* socials */}
          </Grid>
          <Grid item lg={2}>
            {/* socials */}
          </Grid>
          <Grid item lg={2}>
            {/* socials */}
          </Grid>

          <Grid item lg={2}>
            {/* socials */}
          </Grid>
          <Grid item xs={12}>
            {/* divider */}
          </Grid>

          <Grid item xs={12}>
            {/* gutter */}
          </Grid>
        </Grid>
      </Grid>

      {/* divider */}

      <Grid container>
        <Grid item lg={1 / 3} xs={12}>
          {/* english stamp language */}
        </Grid>

        <Grid item lg={1 / 3} xs={12}>
          {/* rights 2020 ect */}
          <p className="HomeTitleMedium">Rights 2021 Semptia Dev ©️</p>
        </Grid>

        <Grid item lg={1 / 3} xs={12}>
          {/* cookie notice link */}
          {/* another link */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
