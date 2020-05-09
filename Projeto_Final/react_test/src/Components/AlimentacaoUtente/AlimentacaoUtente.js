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

const AlimentacaoUtente = ({ refeicoes, deleteRefeicao }) => {
  const classes = useStyles();
  const listaRefeicoes = refeicoes.map((refeicao) => {
    return (
      <Grid item xs={12} key={refeicao.id} className={classes.expansionPanel}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container fluid="true" justify="center" align="center">
              <Grid item xs={4}>
                <Typography className={classes.heading}>
                  {refeicao.id}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.heading}>
                  {refeicao.id}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.heading}>
                  {refeicao.id}
                </Typography>
              </Grid>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ background: "lightGrey" }}>
            <Typography>
              <p>
                <br />
                <b>Pequeno Almoço:</b> {refeicao.pequenoAlmoco}
                <br />
                <br />
                <b>Almoço:</b> {refeicao.almoco}
                <br />
                <br />
                <b>Lanche:</b> {refeicao.lanche}
                <br />
                <br />
                <b>Jantar:</b> {refeicao.jantar}
                <br />
              </p>
              <Fab
                color="secondary"
                aria-label="edit"
                onClick={() => {
                  deleteRefeicao(refeicao.id);
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
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Grid container fluid="true" justify="center" align="center">
            <Grid item xs={4}>
              <Typography className={classes.heading}>Data</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.heading}>Alimentação</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.heading}>Gostou?</Typography>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
      </ExpansionPanel>
      <Grid container fluid="true" justify="center">
        {listaRefeicoes}
      </Grid>
    </div>
  );
};

export default AlimentacaoUtente;
