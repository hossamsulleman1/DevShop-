import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    width: "50%",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function SemptiaCard() {
  const classes = useStyles();

  return (
    
      <Paper elevation={0} variant="outlined" className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <p className="HomeTitleMedium">Semptia Dev ©️</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    
  );
}
