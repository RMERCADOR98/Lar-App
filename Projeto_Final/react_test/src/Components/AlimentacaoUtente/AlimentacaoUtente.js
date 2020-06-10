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

const AlimentacaoUtente = ({ refeicoes, deleteRefeicao, alimento }) => {
  const classes = useStyles();

  // const USERid = utente.alimentacao.id;
  console.log(alimento.id);
  // console.log(USERid);

  const alimentoId = alimento.id;

  return (
    <Grid item xs={12} className={classes.expansionPanel}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Grid container fluid="true" justify="center" align="center">
            <Grid item xs={4}>
              <Typography className={classes.heading}>cenas</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.heading}>cenas</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.heading}>cenas</Typography>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ background: "lightGrey" }}>
          <Typography>
            <p>
              <br />
              <b>Pequeno Almoço:</b> {alimento.pequenoAlmoco}
              <br />
              <br />
              <b>Almoço:</b> {alimento.almoco}
              <br />
              <br />
              <b>Lanche:</b> {alimento.lanche}
              <br />
              <br />
              <b>Jantar:</b> {alimento.jantar}
              <br />
            </p>
            <Fab
              color="secondary"
              aria-label="edit"
              onClick={() => {
                deleteAlimentacao(alimentoId);
              }}
              className={classes.fab}
            >
              <DeleteIcon />
            </Fab>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <br />
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAlimentacao: (alimentoId) => dispatch(deleteAlimentacao(alimentoId)),
  };
};

export default compose(
  connect(mapDispatchToProps),
  firestoreConnect((props) => [
    {
      collection: "utentes",
      doc: props.id,
      subcollections: [{ collection: "alimentacao" }],
      storeAs: "alimentos",
    },
  ])
)(AlimentacaoUtente);
