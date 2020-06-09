import React from "react";

import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import InfoUtente from "./InfoUtente";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const InfoMap = ({ utentes }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {utentes &&
        utentes.map((utente) => {
          return <InfoUtente utente={utente} />;
        })}
    </div>
  );
};

export default InfoMap;
