import React, { useContext, useEffect, useState } from "react";
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



function FirebaseAuth() {
  const [authInfo, setAuthInfo] = useContext(SemContext);
  
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    console.log(authInfo);
    console.log(JSON.stringify(authInfo));
    try {
      console.log(authInfo.uid);
      console.log(authInfo.photoURL);
     
      if (authInfo !== undefined || null) {
        // history.push("/Profile")
        history.push("/Welcome")
      }
    } catch (error) {
      console.log(error);
    }
  }, [authInfo]);

 

  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
    

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

                {setAuthInfo(user)}
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

export default FirebaseAuth;
