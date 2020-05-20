import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../Store/Actions/authActions";

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

const SignedInLinks = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button color="inherit" onClick={props.signOut} className={classes.link}>
        Sair
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
