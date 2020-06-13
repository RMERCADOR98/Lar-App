import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Add from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import BemEstarForm from "./stepperform/BemEstarForm";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    margin: theme.spacing(1),
  },
}));

const FormDialogaddBemEstar = ({ id }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <Fab
        color="secondary"
        aria-label="add"
        className={classes.fab}
        onClick={handleClickOpen}
      >
        <Add />
      </Fab>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
          Bem Estar
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Complete o formulário para adicionar um Familiar
          </DialogContentText>
          <BemEstarForm handleClose={handleClose} id={id} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormDialogaddBemEstar;
