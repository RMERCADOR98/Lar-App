import React from "react";
import { Avatar, makeStyles, Grid } from "@material-ui/core";

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

  const nasc = utente.nascimento.toDate();
  const hoje = new Date();

  const idademili = Math.abs(hoje - nasc);
  const idade = parseInt(idademili / 31556952000);

  return (
    <Grid item xs={12} key={utente.id}>
      <div className={classes.gridPaper} justify="center">
        <Avatar
          variant="circle"
          className={classes.large}
          src={process.env.PUBLIC_URL + "img/oldLady.jpg"}
        />
        <p>
          <b>{utente.alcunha}</b>
          <br />
          Idade: {idade}
          <br />
          Estado civil: {utente.estadoCivil}
          <br />
        </p>
      </div>
    </Grid>
  );
};

export default Utente;
