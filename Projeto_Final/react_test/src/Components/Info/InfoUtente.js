import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  Card,
  Container,
  Avatar,
  CardHeader,
  Grid,
  Fab,
  CardActions,
  IconButton,
} from "@material-ui/core";

import EditarUtente from "../EditarUtente";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      flexGrow: 1,
    },
  },
  gridPaper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: "start",
    color: theme.palette.text.secondary,
  },

  fabbtn: {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  voltar: {
    margin: "0 auto",
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  arrow: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

const InfoUtente = ({ infos, utente, prop, bind }) => {
  const classes = useStyles();
  const nasc = utente.nascimento.toDate();
  const hoje = new Date();

  const idademili = Math.abs(hoje - nasc);
  const idade = parseInt(idademili / 31556952000);

  console.log(prop);

  console.log(bind);

  return (
    <Container className={classes.root}>
      <div key={utente.id}>
        <p>
          <b>Nome:</b> {utente.nomeCompleto}
          <br />
          <br />
          <b>Alcunha:</b> {utente.alcunha}
          <br />
          <br />
          <b>Data de nascimento:</b>{" "}
          {new Date(utente.nascimento.seconds * 1000).toLocaleDateString(
            "pt-PT"
          )}
          <br />
          <br />
          <b>Idade:</b> {idade}
          <br />
          <br />
          <b>Sexo:</b> {utente.sexo}
          <br />
          <br />
          <b>Estado Civil:</b> {utente.estadoCivil}
          <br />
          <br />
          <b>Nacionalidade:</b> {utente.nacionalidade}
          <br />
          <br />
          <b>Altura:</b> {utente.altura + " Cm"}
          <br />
          <br />
          <b>Cartão de Cidadão:</b> {utente.nCartaoCidadao}
          <br />
          <br />
          <b>Número de contribuinte:</b> {utente.nContribuinte}
          <br />
          <br />
          <b>Número de Segurança Social:</b> {utente.nSegurancaSocial}
          <br />
        </p>
      </div>
    </Container>
  );
};

export default InfoUtente;
