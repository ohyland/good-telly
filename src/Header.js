import React from "react";
// import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { ReactComponent as Logo } from "./static/images/goodtelly-logo.svg"
// func useStyles
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
  },
  toolBar: {
    minHeight: 72,
  },
  navTitle: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  logo: {
    margin: `0px ${theme.spacing(2)}px`,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <header>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className="classes.toolBar">
          <div className={classes.logo}>
            <Logo />
          </div>
          <Typography variant="h6" className={classes.navTitle}>
            Movies
          </Typography>
          <Typography variant="h6" className={classes.navTitle}>
            TV shows
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
