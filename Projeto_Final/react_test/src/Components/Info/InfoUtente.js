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

const InfoUtente = ({ infos }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.gridPaper} justify="center">
      <p>
        <b>Nome:</b> {infos.nome}
        <br />
        <br />
        <b>Alcunha:</b> {infos.alcunha}
        <br />
        <br />
        <b>Idade:</b> {infos.idade}
        <br />
        <br />
        <b>Altura:</b> {infos.altura}
        <br />
        <br />
        <b>Estado Civil:</b> {infos.estadoCivil}
        <br />
        <br />
        <b>Data de nascimento:</b> {infos.dataNascimento}
        <br />
        <br />
        <b>Nacionalidade:</b> {infos.nacionalidade}
        <br />
      </p>
    </Paper>
  );
};

export default InfoUtente;
