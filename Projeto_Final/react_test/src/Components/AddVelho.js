import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

export default function FloatingActionButtonSize() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Fab
          color="secondary"
          size=""
          aria-label="add"
          className={(classes.margin, classes.fab)}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}
