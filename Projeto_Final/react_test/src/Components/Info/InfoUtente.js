import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridPaper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: "start",
    color: theme.palette.text.secondary,
  },
  large: {
    margin: "0 auto",
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

const InfoUtente = ({ infos, utente }) => {
  const classes = useStyles();
  console.log(utente);
  return (
    <Paper className={classes.gridPaper} justify="center" key={utente.id}>
      <div>
        <p>
          <b>Nome:</b> {utente.nome}
          <br />
          <br />
          <b>Alcunha:</b> {utente.alcunha}
          <br />
          <br />
          <b>Idade:</b> {utente.idade}
          <br />
          <br />
          <b>Altura:</b> {utente.altura}
          <br />
          <br />
          <b>Estado Civil:</b> {utente.estadoCivil}
          <br />
          <br />
          <b>Data de nascimento:</b> {utente.dataNascimento}
          <br />
          <br />
          <b>Nacionalidade:</b> {utente.nacionalidade}
          <br />
        </p>
      </div>
    </Paper>
  );
};

export default InfoUtente;
