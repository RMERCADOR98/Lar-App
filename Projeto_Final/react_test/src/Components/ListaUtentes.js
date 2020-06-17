import React from "react";
import Utente from "../Layout/Utente";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const ProjectList = ({ utentes }) => {
  const classes = useStyles();
  console.log(utentes);
  return (
    <div className={classes.root}>
      <Grid container fluid="true" justify="center" align="center">
        {utentes &&
          utentes.map((utente) => {
            return (
              <Link
                to={"/utente/" + utente.id}
                style={{ textDecoration: "none" }}
              >
                <Utente utente={utente} />
              </Link>
            );
          })}
      </Grid>
    </div>
  );
};

export default ProjectList;
