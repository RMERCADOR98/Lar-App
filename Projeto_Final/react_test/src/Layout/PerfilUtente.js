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
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

const PerfilUtente = ({ utentes, deleteUtente }) => {
  const classes = useStyles();
  const listaUtentes = utentes.map((utente) => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={2} xl={2} key={utente.id}>
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
          <button
            onClick={() => {
              deleteUtente(utente.id);
            }}
          >
            Apagar Utente
          </button>
        </Paper>
      </Grid>
    );
  });

  return (
    <div className={classes.root}>
      <Grid container fluid="true" justify="center">
        {listaUtentes}
      </Grid>
    </div>
  );
};

export default PerfilUtente;
