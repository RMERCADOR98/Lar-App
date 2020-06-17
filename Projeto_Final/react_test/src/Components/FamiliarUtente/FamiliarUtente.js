import React from "react";
import {
  makeStyles,
  Grid,
  Card,
  CardHeader,
  Avatar,
  Paper,
} from "@material-ui/core";

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
import { deleteFamiliar } from "../../Store/Actions/FamiliarActions";

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
  card: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3),
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
  paper: {
    marginLeft: theme.spacing(3),
  },
}));

const FamiliarUtente = ({
  refeicoes,
  deleteRefeicao,
  familia,
  id,
  Uid,
  deleteFamiliar,
}) => {
  const classes = useStyles();

  console.log(familia.id);
  console.log(Uid);
  const Utenteid = Uid;

  return (
    <Grid item xs={12} className={classes.expansionPanel}>
      <Paper className={classes.card} elevation={5}>
        <CardHeader
          action={
            <Avatar
              aria-label="Delete"
              className={classes.voltar}
              style={{ marginTop: "8px", marginRight: "6px" }}
            >
              <Fab
                variant="contained"
                color="secondary"
                className={classes.voltar}
                onClick={() => {
                  deleteFamiliar(familia.id, Uid);
                }}
              >
                <DeleteIcon className={classes.arrow} />
              </Fab>
            </Avatar>
          }
        ></CardHeader>
        <p className={classes.paper}>
          <b>Nome:</b>
          {familia.nomeCompleto}
          <br />
          <br />
          <b>Email:</b> {familia.email}
          <br />
          <br />
          <b>Contacto:</b> {familia.contacto}
          <br />
          <br />
          <b>Morada:</b> {familia.morada}
          <br />
          <br />
          <b>Afiliação:</b> {familia.afiliacao}
          <br />
          <br />
          <b>Numero de Cartão de Cidadão:</b> {familia.nCartaoCidadao}
          <br />
          <br />
          <b>Numero de Contribuinte:</b> {familia.nContribuinte}
          <br />
          <br />
          <b>Numero de Segurança Social:</b> {familia.nSegurancaSocial}
          <br />
          <br />
          {/* <b>Jantar:</b> {alimento.jantar} */}
          <br />
        </p>
        <deleteAlimentacao Uid={Uid} />
      </Paper>

      <br />
    </Grid>
  );
};

const mapStateToProps = (state, ownProps) => {
  const Uid = ownProps.id; //id do utente
  console.log(ownProps);
  console.log(state.firestore.data);

  return {
    Uid: Uid,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFamiliar: (familiar, Uid) => dispatch(deleteFamiliar(familiar, Uid)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [
    {
      collection: "utentes",
      doc: props.id,
      subcollections: [{ collection: "familiar" }],
      storeAs: "familiar",
    },
  ])
)(FamiliarUtente);
