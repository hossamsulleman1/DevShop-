import React from "react";
import { Typography, Grid } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Fab } from "@material-ui/core/Fab";
import FirebaseAuth from "./FirebaseAuth";



const useStyles = makeStyles((theme) => ({
  marginTop: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(20),
    },
  },
}));

const LoginSign = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className="headingdiv">
            <br />
            <br />
            <br />
            <br />
            <br />

            <ArrowBackIcon />
            {/* <p className="HomeTitle">{authInfo.displayName}</p> */}
            <p className="HomeTitle">One Click</p>
          </div>

          <div className="statsdiv">
            <p className="HomeTitleMedium">
              Sign in, Sign up who said you needed two buttons{" "}
            </p>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <FirebaseAuth />
          <div className="statsdiv"></div>
        </Grid>
        <Grid item xs={6}>
          <div className="avatardiv">
            {/* <Avatar className={classes.large} src={authInfo.photoURL}> */}H
            {/* </Avatar> */}
            <div className="friendsdiv">
              <div className="justifycenter">
                {/* <Divider></Divider> */}

                <p className="SubHeading">ALL FRIENDS</p>
                <br></br>
              </div>

              <div className="friendsdiv2">
                <Container></Container>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      {/* GRAPHS CONTAINER  */}
      <Container>
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs></Grid>
        </Grid>
      </Container>
      {/* GRAPHS CONTAINER END  */}
    </Container>
  );
};

export default LoginSign;
