import React from "react";
import { NavLink } from "react-router-dom";

import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
}));

const SignedOutLinks = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavLink to="/sign" className={classes.link} variant="inherit">
        <Button color="inherit" type="button">
          Sign Up
        </Button>
      </NavLink>
      <Button color="inherit">
        <NavLink to="/signin" className={classes.link} variant="inherit">
          Login
        </NavLink>
      </Button>
    </div>
  );
};

export default SignedOutLinks;
