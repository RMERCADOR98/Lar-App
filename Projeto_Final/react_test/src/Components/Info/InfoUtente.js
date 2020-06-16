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
      <Card className={classes.gridPaper}>
        <div key={utente.id}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.voltar}>
                {/* <EditarUtente utenteId={utenteId} /> */}
                <Fab
                  variant="contained"
                  color="secondary"
                  className={classes.voltar}
                  onClick={() => {
                    prop.history.goBack();
                  }}
                >
                  <ArrowBackIcon className={classes.arrow} />
                </Fab>
              </Avatar>
            }
            action={
              <Avatar aria-label="recipe" className={classes.voltar}>
                <Fab
                  variant="contained"
                  color="secondary"
                  className={classes.voltar}
                  // onClick={() => {
                  //   ownProps.history.push("/");
                  // }}
                >
                  <EditIcon className={classes.arrow} />
                </Fab>
              </Avatar>
            }
          ></CardHeader>

          {/* <CardHeader
          action={
            <Avatar aria-label="recipe" className={classes.voltar}>
              <Fab
                variant="contained"
                color="secondary"
                className={classes.voltar}
                // onClick={() => {
                //   deleteUtente(utenteId);
                //   props.history.push("/");
                // }}
              >
                <EditIcon className={classes.arrow} />
              </Fab>
            </Avatar>
          }
        ></CardHeader> */}
          {/* <Paper className={classes.gridPaper} justify="center"> */}

          <p>
            <img src={utente.url} alt="" height="100px" weight="100px"></img>
            <br />
            <br />
            <b>Nome:</b> {utente.nomeCompleto}
            <br />
            <b>Alcunha:</b> {utente.alcunha}
            <br />
            <br />
            <b>Idade:</b> {idade}
            <br />
            <br />
            <b>Peso:</b> {utente.peso + " Kg"}
            <br />
            <br />
            <b>Altura:</b> {utente.altura + " Cm"}
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
        {/* <EditarUtente prop={prop} /> */}
        {/* </Paper> */}
      </Card>
    </Container>
  );
};

export default InfoUtente;
