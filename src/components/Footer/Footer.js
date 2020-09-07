import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "12px",
    fontWeight: "bold",
  },
  AppBar: {
    background: "#70c0a7",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <Button
            className={classes.title}
            color="inherit"
            href="https://dilanramirez.com/"
          >
            Contact Me
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
