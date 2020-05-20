import React from "react";
import { Avatar, makeStyles, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridPaper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  large: {
    margin: "0 auto",
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

const Utente = ({ utente }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} key={utente.id}>
      <Paper className={classes.gridPaper} justify="center">
        <Avatar
          variant="circle"
          className={classes.large}
          src={process.env.PUBLIC_URL + "img/oldLady.jpg"}
        />
        <p>
          <b>{utente.nome}</b>
          <br />
          Idade: {utente.idade}
          <br />
          Estado civil: {utente.eCivil}
          <br />
        </p>
      </Paper>
    </Grid>
  );
};

export default Utente;
