import React from "react";

import { makeStyles } from "@material-ui/core";
import AlimentacaoUtente from "./AlimentacaoUtente";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const AlimentacaoMap = ({ alimentacao, id, deleteAlimentacao }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {alimentacao &&
        alimentacao.map((alimento) => {
          return (
            <div key={alimentacao.id}>
              <AlimentacaoUtente
                alimento={alimento}
                id={id}
                deleteAlimentacao={deleteAlimentacao}
              />
              ;
            </div>
          );
        })}
    </div>
  );
};

export default AlimentacaoMap;
