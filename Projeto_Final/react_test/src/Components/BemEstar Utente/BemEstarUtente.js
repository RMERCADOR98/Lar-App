import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";

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

const BemEstarUtente = ({ bes, deleteBE }) => {
  const classes = useStyles();
  const listabes = bes.map((be) => {
    return (
      <Grid item xs={12} key={be.id} className={classes.expansionPanel}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container fluid="true" justify="center">
              <Grid item xs={4}>
                <Typography className={classes.heading}>{be.id}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.heading}>{be.id}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.heading}>{be.id}</Typography>
              </Grid>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ background: "lightGrey" }}>
            <Typography>
              <p>
                <br />
                <b>medicacao:</b> {be.medicacao}
                <br />
                <br />
                <b>Banho:</b> {be.banho}
                <br />
                <br />
                <b>Humor:</b> {be.humor}
                <br />
                <br />
                <b>Observacoes:</b> {be.observacoes}
                <br />
              </p>
              <Fab
                color="secondary"
                aria-label="edit"
                onClick={() => {
                  deleteBE(be.id);
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
  });

  return (
    <div className={classes.root}>
      <ExpansionPanel disabled>
        <ExpansionPanelSummary
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Data</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
      <Grid container fluid="true" justify="center">
        {listabes}
      </Grid>
    </div>
  );
};

export default BemEstarUtente;
