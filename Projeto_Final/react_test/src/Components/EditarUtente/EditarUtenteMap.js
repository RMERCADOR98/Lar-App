import React from "react";

import { makeStyles } from "@material-ui/core";
import EditarUtenteUtente from "./EditarUtenteUtente";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const EditarUtenteMap = ({ utentes }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {utentes &&
        utentes.map((utente) => {
          return (
            <div key={utente.id}>
              <EditarUtenteUtente utente={utente} />;
            </div>
          );
        })}
    </div>
  );
};

export default EditarUtenteMap;
