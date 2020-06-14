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

const SaudeUtente = ({ saude }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.gridPaper} justify="center">
      <p>
        <b>Grupo Sanguineo:</b> {saude.grupoSanguineo}
        <br />
        <br />
        <b>Doenças:</b> {saude.doencas}
        <br />
        <br />
        <b>Alergias:</b> {saude.alergias}
        <br />
        <br />
        <b>Centro de Saúde:</b> {saude.centroSaude}
        <br />
        <br />
        <b>Contacto do Centro de Saúde:</b> {saude.contactoCentroSaude}
        <br />
        <br />
        <b>Médico:</b> {saude.medico}
        <br />
      </p>
    </Paper>
  );
};

export default SaudeUtente;
