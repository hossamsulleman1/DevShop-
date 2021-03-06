import React, { useContext } from "react";
import clsx from "clsx";
import { fade, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import { green } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Item from "../Item/Item";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import { SemContext } from "./../../SemContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    borderRadius: "25px",
  },
  genre: {
    width: "100%",
    borderRadius: "25px",
    height: 300,
    backgroundColor: "#046AF4",
    margin: 30,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    // marginLeft: 0,
    width: "100%",
    margin: 40,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function BottomDrawerShop({
  handleAddToCart,
  product,
  image,
  itemPrice,
  title,
  onAddToCart,
}) {
  let history = useHistory();

  const [currentItem, setCurrentItem] = useContext(SemContext);
  const [productState, setProductState] = useContext(SemContext);

  const handleOpenProduct = async () => {
    setCurrentItem(product);
    setProductState(product);
    console.log(currentItem);
    history.push("/item");
  };

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid container justify="center" alignItems="center">
        <IconButton onClick={toggleDrawer(anchor, false)}>
          <KeyboardArrowDownIcon />
          {/* toggle drawer close */}
        </IconButton>
        <Grid item xs={12}></Grid>
      </Grid>

      <List>
        {/* DRILL */}
        <Item
          product={product}
          title={title}
          itemPrice={itemPrice}
          image={image}
          handleAddToCart={handleAddToCart}
          onAddToCart={onAddToCart}
        />
        {/* DRILL */}

        {/* put div squares for dif genres and things like that sale ect  */}
      </List>
    </div>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            variant="contained"
            color="secondary"
            onClick={toggleDrawer(anchor, true)   }
          >
            <OpenInBrowserIcon  />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default BottomDrawerShop;
