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
  const nasc = utente.nascimento.toDate();
  const hoje = new Date();

  const idademili = Math.abs(hoje - nasc);
  const idade = parseInt(idademili / 31556952000);

  console.log(utente);
  return (
    <Paper className={classes.gridPaper} justify="center" key={utente.id}>
      <div>
        <p>
          <b>Foto:</b>{" "}
          <img src={utente.url} alt="" height="100px" weight="100px"></img>
          <br />
          <br />
          <b>Nome:</b> {utente.nomeCompleto}
          <br />
          <br />
          <b>Alcunha:</b> {utente.alcunha}
          <br />
          <br />
          <b>Idade:</b> {idade}
          <br />
          <br />
          <b>Altura:</b> {utente.altura}
          <br />
          <br />
          <b>Estado Civil:</b> {utente.estadoCivil}
          <br />
          <br />
          <b>Data de nascimento:</b>{" "}
          {new Date(utente.nascimento.seconds * 1000).toLocaleDateString(
            "pt-PT"
          )}
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
