import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";

import { connect } from "react-redux"; //conecta o component com o redux
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { deleteAlimentacao } from "../../Store/Actions/AlimentacaoActions";

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
  expansionPanel: {
    width: "100%",
  },
  expansionPanelHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const EditarUtenteUtente = ({
  refeicoes,
  deleteRefeicao,
  utente,
  id,
  Uid,
  deleteAlimentacao,
}) => {
  const classes = useStyles();

  // const USERid = utente.alimentacao.id;

  // console.log(USERid);

  // const alimentoId = alimento.id;
  // const Uid = id;
  console.log(utente.id);
  console.log(Uid);
  const Utenteid = Uid;

  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        {" "}
        */}
        <label htmlFor="nomeCompleto">Nome:</label>
        <input type="text" id="nomeCompleto" onChange={this.handleChange} />
        <br />
        <label htmlFor="idade">Idade:</label>
        <input type="text" id="idade" onChange={this.handleChange} />
        <br />
        <label htmlFor="eCivil">Estado Civil:</label>
        <input
          type="text"
          id="eCivil"
          onChange={this.handleChange}
          value={utente.eCivil}
        />
        <br />
        <button>Update</button>>
      </form>
    </div>
  );
};

export default EditarUtenteUtente;
