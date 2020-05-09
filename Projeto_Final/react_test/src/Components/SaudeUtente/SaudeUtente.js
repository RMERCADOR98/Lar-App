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

const SaudeUtente = ({ saudes }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.gridPaper} justify="center">
      <p>
        <b>Grupo Sanguineo:</b> {saudes.grupoSanguineo}
        <br />
        <br />
        <b>Doenças:</b> {saudes.doencas}
        <br />
        <br />
        <b>Alergias:</b> {saudes.alergias}
        <br />
        <br />
        <b>Centro de Saúde:</b> {saudes.centroSaude}
        <br />
        <br />
        <b>Contacto do Centro de Saúde:</b> {saudes.contactoCentroSaude}
        <br />
        <br />
        <b>Médico:</b> {saudes.medico}
        <br />
      </p>
    </Paper>
  );
};

export default SaudeUtente;
