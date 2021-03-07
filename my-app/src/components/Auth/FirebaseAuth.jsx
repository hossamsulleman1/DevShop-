import React, { useContext, useEffect } from "react";
import { render } from "react-dom";
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";
import config from "./Config";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { SocialIcon } from "react-social-icons";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";


// CONTEXT REACT
import { SemContext } from "../../SemContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  social: {
    width: "100px;",
    height: "100px;",
    paddingRight: 5,
  },
  paper: {
    padding: theme.spacing(2),
    width: "180px",
    height: "90px",
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  SocialIcon: {
    margin: "10px",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

  const FirebaseAuth = () => {
  const classes = useStyles();
  let history = useHistory();

  const WriteAuthInfo = (user) => {
    setAuthInfo(user);
    console.log(authInfo);
    AuthCheck(authInfo)
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);


  };

  const AuthCheck = () => {
console.log(authInfo)
if (authInfo !== null || authInfo !== undefined ) {
      console.log("authINFO!!", JSON.stringify(authInfo, null, 2));
      history.push("/profile");
      console.log("use effect triggered");
  }

  const [open, setOpen] = React.useState(false);

  const [authInfo, setAuthInfo] = useContext(SemContext);


  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Welcome
        </Alert>
      </Snackbar>

      <div>
        <SocialIcon
          className={classes.SocialIcon}
          network="google"
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        />

        <SocialIcon className={classes.SocialIcon} network="github" />

        <SocialIcon className={classes.SocialIcon} network="twitter" />
        <SocialIcon className={classes.SocialIcon} network="facebook" />

        <SocialIcon className={classes.SocialIcon} network="youtube" />

        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
              <pre>
                {/* {JSON.stringify({ isSignedIn, user, providerId }, null, 2)} */}

                {WriteAuthInfo(user)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer>

        <div>
          <IfFirebaseAuthed></IfFirebaseAuthed>
          <IfFirebaseAuthedAnd
            filter={({ providerId }) => providerId !== "anonymous"}
          ></IfFirebaseAuthedAnd>
        </div>
      </div>
    </FirebaseAuthProvider>
  );
}

export default FirebaseAuth