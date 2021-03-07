import React from "react";
import BottomAppBar from "./../Navbar/BottomBar";
import ShopCards from "./ShopCards";
import { Grid } from "@material-ui/core";

const Market = () => {
  return (
    <>
      <Grid container spacing={3}>
        <ShopCards />
      </Grid>
      {/* fab become a seller */}
      {/* bottom nav fab shuffle button gooes to random shop */}
      <BottomAppBar />
    </>
  );
};

export default Market;
