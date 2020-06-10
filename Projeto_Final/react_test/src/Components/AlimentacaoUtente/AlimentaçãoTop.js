import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

const AlimentacaoTop = () => {
  const classes = useStyles();
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
    </div>
  );
};

export default AlimentacaoTop;
