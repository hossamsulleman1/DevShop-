import React, { useContext }from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { SemContext } from "../../SemContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

export default function PhotoGrid() {
  const [assets, setAssets] = useContext([]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {assets.map((tile) => (
          <GridListTile key={assets.id} cols={tile.cols || 1}>
            <img src={assets.url} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
