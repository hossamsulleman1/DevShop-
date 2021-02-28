import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import FaceIcon from "@material-ui/icons/Face";
import logo from "../../assets/Demo.svg";
import useStyles from "./styles";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

import { SemContext } from "../../SemContext";

const PrimarySearchAppBar = ({ totalItems }) => {
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const [darkState, setDarkState] = useContext(SemContext);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          component={Link}
          to="/cart"
          aria-label="Show cart items"
          color="inherit"
        >
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            style={{ textDecoration: "none" }}
            component={Link}
            to="/"
            variant="h6"
            color="inherit"
          >
            <img
              src={logo}
              alt="Semptia Dev"
              height="25px"
              className={classes.image}
            />
            Semptia Dev
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <Switch checked={darkState} onChange={handleThemeChange} />

              <IconButton component={Link} to="/Profile" color="inherit">
                <FaceIcon />
                {/* profile page */}
              </IconButton>

              <IconButton component={Link} to="/Market" color="inherit">
                <LoyaltyIcon></LoyaltyIcon>
                {/* market */}
              </IconButton>
            </div>
          )}
          <IconButton
            component={Link}
            to="/cart"
            aria-label="Show cart items"
            color="inherit"
          >
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <IconButton component={Link} to="/Shop" color="inherit">
            <LocalMallIcon />
            {/* market */}
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
