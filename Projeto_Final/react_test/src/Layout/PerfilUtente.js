import React from "react";
import { Avatar, makeStyles, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const PerfilUtente = ({ utentes, deleteUtente }) => {
  const classes = useStyles();
  const listaUtentes = utentes.map((utente) => {
    return (
      <div className={classes.root} key={utente.id}>
        <Grid item xs={3}>
          <Paper className={classes.gridPaper}>
            <Avatar
              variant="circle"
              className={classes.large}
              src={process.env.PUBLIC_URL + "img/oldLady.jpg"}
            />
            {/* Tive de usar o require pois chamar apenas peça imagem nao resolvia o problema -> StackOverflow*/}
            <p style={{ textAlign: "center" }}>
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
      </div>
    );
  });
  return (
    <div className={classes.root}>
      <Grid
        container
        flexWrap="wrap"
        spacing={0}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        direction="row"
      >
        {listaUtentes}
      </Grid>
    </div>
  );
};

export default PerfilUtente;
