import { Container } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import Divider from "@material-ui/core/Divider";
import React, { useState } from "react";
// import { Text, Heading } from "rebass";
import { makeStyles } from "@material-ui/core/styles";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
// import FriendsAvatarList from "./FriendsAvatarList";
import { useContext } from "react";
import { SemContext } from "../../SemContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

function Content(props) {
  const classes = useStyles();
  const [authInfo, setAuthInfo] = useContext(SemContext);
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className="headingdiv">
            <p className="HomeTitleSmall">HEY WHATS UP,</p>
            {/* <p className="HomeTitle">{authInfo.displayName}</p> */}
            <p className="HomeTitle">{console.log(authInfo.photoURL)}</p>
          </div>
          
          <Divider />
          <div className="statsdiv">
            <p className="HomeTitleMedium">LAST SIGN IN</p>
            {/* <p>{authInfo.lastSignInTime}</p> */}
            {/* FIX */}
            <p className="HomeTitleMedium">MEMBER SINCE</p>
            {/* <p>{authInfo.creationTime}</p> */}
            <p className="HomeTitleMedium">HOURS LOGGED</p>
            {/* <p>{props.HoursLogged}</p> */}
            <p className="HomeTitleMedium">CHECKLIST TASKS COMPLETED</p>
            {/* <p>{props.TasksCompleted}</p> */}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <Divider />

          <div className="statsdiv"></div>
        </Grid>
        <Grid item xs={6}>
          <div className="avatardiv">
            <Avatar className={classes.large} src={authInfo.photoURL}>
              H
            </Avatar>
            <div className="friendsdiv">
              <div className="justifycenter">
                <Divider></Divider>

                <Divider></Divider>
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
        <p className="HomeTitleSmall">Favorites</p>
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs></Grid>
        </Grid>
      </Container>
      {/* GRAPHS CONTAINER END  */}
    </Container>
  );
}

export default Content;
