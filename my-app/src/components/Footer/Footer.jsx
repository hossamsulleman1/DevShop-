import React from "react";
import { Grid, Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import Fab from "@material-ui/core/Fab";
import SocialIcons from "./SocialIcons";

const useStyles = makeStyles({
  margin: {
    margin: 40,
  },
  fab: {
    width: 300,
    margin: 30,
  },
  words: {
    margin: 30,
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.margin}>
      <Divider />
      <Grid container justify="center" alignItems="center">
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
        <div className="flexWrap">
          <div>
            <Typography
              className={classes.words}
              variant="body2"
              color="textSecondary"
            >
              Suscribe to our news letter for promotional news
            </Typography>
            <Fab variant="extended" className={classes.fab}>
              Sign up to news letter
              <AnnouncementIcon />
            </Fab>
          </div>

        

          <div>
            <Typography
              className={classes.words}
              variant="body2"
              color="textSecondary"
            >
              Follow Us On Social Media
            </Typography>

            <SocialIcons />
          </div>


          <div>
            <p className="HomeTitleMedium">Rights 2021 Semptia Dev ©️</p>
          </div>

        </div>
      </Grid>
    </div>
  );
};

export default Footer;
