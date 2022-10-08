import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { ReactComponent as Logo } from "./static/images/goodtelly-logo.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
  },
  toolBar: {
    minHeight: "72px",
  },
  navTitle: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  logo: {
    margin: `0px ${theme.spacing(2)}px`,
  },
}));

function MuiAppBar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.logo}>
            <Logo />
          </div>

          <Link to="/movies">
            <Typography variant="h6" className={classes.navTitle}>
              Movies
            </Typography>
          </Link>
          <Link to="/tv-shows">
            <Typography variant="h6" className={classes.navTitle}>
              TV Shows
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MuiAppBar;
