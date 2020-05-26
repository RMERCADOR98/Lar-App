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

  // const idade = new Date() - new Date(utente.nascimento * 1000);
  console.log(utente.createdAt);
  console.log(utente.nascimento);
  const idade = utente.nascimento;
  console.log(idade);

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
          Idade:
          {new Date(utente.createdAt.seconds * 1000).toLocaleDateString(
            "pt-PT"
          )}
          <br />
          Estado civil: {utente.estadoCivil}
          <br />
        </p>
      </div>
    </Grid>
  );
};

export default Utente;
