import React from "react";
import { makeStyles, Grid, Paper } from "@material-ui/core";

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
import { deleteBemEstar } from "../../Store/Actions/BemEstarActions";

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
  espaco: {
    marginRight: "12px",
    marginLeft: "12px",
  },
}));

const BemEstarUtente = ({ bemEsta, id, Uid, deleteBemEstar }) => {
  const classes = useStyles();

  console.log(bemEsta.id);
  console.log(Uid);
  const Utenteid = Uid;

  return (
    <Grid item xs={12} className={classes.expansionPanel}>
      <Paper className={classes.espaco} elevation={5}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container fluid="true" justify="center" align="center">
              <Grid item xs={4}>
                <Typography className={classes.heading}>
                  {new Date(
                    bemEsta.createdAt.seconds * 1000
                  ).toLocaleDateString("pt-PT")}
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography className={classes.heading}>
                  {bemEsta.banho}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.heading}>
                  {bemEsta.humor}
                </Typography>
              </Grid>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ background: "lightGrey" }}>
            <Typography>
              <p>
                <b>Medicação: </b> {bemEsta.medicacao}
                <br />
                <br />
                <b>Observações:</b> {bemEsta.observacoes}
                <br />
                <deleteAlimentacao Uid={Uid} />
              </p>
              <Fab
                color="secondary"
                aria-label="edit"
                onClick={() => {
                  deleteBemEstar(bemEsta.id, Uid);
                  console.log(Uid); //id da alimentação diária
                }}
                className={classes.fab}
              >
                <DeleteIcon />
              </Fab>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
      <br />
    </Grid>
  );
};

const mapStateToProps = (state, ownProps) => {
  const Uid = ownProps.id; //id do utente
  console.log(ownProps);
  console.log(Uid);
  console.log(state.firestore.data);

  return {
    Uid: Uid,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBemEstar: (bemEstar, Uid) => dispatch(deleteBemEstar(bemEstar, Uid)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [
    {
      collection: "utentes",
      doc: props.id,
      subcollections: [{ collection: "bemEstar" }],
      storeAs: "bemEstar",
    },
  ])
)(BemEstarUtente);
