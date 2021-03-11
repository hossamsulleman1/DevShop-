import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import SettingsIcon from "@material-ui/icons/Settings";
import Link from "@material-ui/core/Link";
import LinkedCameraIcon from "@material-ui/icons/LinkedCamera";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import { ShoppingCart } from "@material-ui/icons";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Badge from "@material-ui/core/Badge";
import FlashOffIcon from "@material-ui/icons/FlashOff";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
    marginTop: 20,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" aria-label="open drawer">
            <MenuIcon />
          </IconButton>

          <IconButton edge="start" aria-label="open drawer">
            <FaceIcon />
          </IconButton>

          <IconButton edge="start" aria-label="open drawer">
            <FlashOffIcon />
          </IconButton>

        



<IconButton>
            <LocalMallIcon />
            {/* market */}
          </IconButton>
          <IconButton>
            <LocalMallIcon />
            {/* market */}
          </IconButton>

          <IconButton>
            {/* <Badge badgeContent={totalItems} color="secondary"> */}
            <ShoppingCart />
            {/* </Badge> */}
          </IconButton>

          <Fab
            color="secondary"
            aria-label="add"
            edge="end"
            component={Link}
            to="/"
            className={classes.fabButton}
          >
            <HomeIcon />
            <Link to="/Connect"></Link>
          </Fab>


          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
