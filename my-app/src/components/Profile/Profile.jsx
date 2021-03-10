import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import FaceIcon from "@material-ui/icons/Face";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import React, { useState, useEffect } from "react";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { SemContext } from "../../SemContext";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  divider: {
    color: "black",
    // background,color : 'black'
  },
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
    margin: 40,
  },
  div: {
    marginTop: 80,
  },
  name: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontWeight: 900,
    fontSize: 50,
  },
  intro: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontWeight: 700,
    fontSize: 50,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Profile(props) {
  const [authInfo, setAuthInfo] = useContext(SemContext);
  const [lastLoginAt, setLastLoginAt] = useState();
  const [creationTime, setCreationTime] = useState();
  const [photoURL, setPhotoURL] = useState();
  const [displayName, setDisplayName] = useState();

  useEffect(() => {
    console.log(authInfo);
    console.log("useEffect");
    try {
      if (authInfo == null || undefined) {
        return (
          (
            <Grid justify="center" alignItems="center">
              <circularProgress />
            </Grid>
          ),
          history.push("/Welcome")
        );
      }
      setPhotoURL(authInfo.photoURL);
      setDisplayName(authInfo.displayName);
      setCreationTime(authInfo.metadata.creationTime);
      setLastLoginAt(authInfo.metadata.lastSignInTime);
      handleClick();
    } catch (error) {
      console.log(error);
    }
  }, [authInfo]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  let history = useHistory();

  return (
    <Container>
      <div className={classes.div}>
        {/* king div */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Welcome {displayName}
          </Alert>
        </Snackbar>
        <Grid container>
          <Grid item sm={6} xs={12}>
            {/* name grid */}
            <div className={classes.div}>
              <Typography className={classes.intro}>{props.Intro}</Typography>
              {/* home title is 100px and should be used on xl displays */}
            </div>

            <Typography className={classes.name}>{displayName}</Typography>
            {/* <p>UUID: 34702-324801</p> */}
            {/* make uuid modal in bottom bar not bottom bar on connect page show users uuid and be like connect with someonje elses uuid  */}
          </Grid>

          <div className={classes.div}>
            <Grid item justify="center" alignItems="center" xs={12} sm={6}>
              {/* avatar grid  */}
              <Avatar src={photoURL} className={classes.large}></Avatar>
            </Grid>
          </div>

          <Divider className={classes.divider}></Divider>

          <Grid item xs={12}>
            <div className="statsdiv">
              <p className="HomeTitleMedium">LAST SIGN IN</p>
              <p>{lastLoginAt}</p>
              {/* FIX */}
              <p className="HomeTitleMedium">MEMBER SINCE</p>
              <p>{creationTime}</p>
            </div>
            {/* social grid */}
            <div className="statsdiv"></div>
            <br></br>
            <br></br>

            <br></br>
            {/* <Divider className={classes.divider}></Divider> */}

            <div className="statsdiv">
              <p className="HomeTitleMedium">Favorites</p>
              <br></br>
              <br></br>
              <div className="chipset">
                <br></br>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Profile;
