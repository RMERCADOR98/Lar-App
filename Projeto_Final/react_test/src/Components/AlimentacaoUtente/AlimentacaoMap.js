import React from "react";

import { makeStyles } from "@material-ui/core";
import AlimentacaoUtente from "./AlimentacaoUtente";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const AlimentacaoMap = ({ alimentacao }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {alimentacao &&
        alimentacao.map((alimento) => {
          return <AlimentacaoUtente alimento={alimento} />;
        })}
    </div>
  );
};

export default AlimentacaoMap;
