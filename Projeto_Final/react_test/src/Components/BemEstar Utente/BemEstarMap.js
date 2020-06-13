import React from "react";

import { makeStyles } from "@material-ui/core";
import BemEstarUtente from "./BemEstarUtente";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const AlimentacaoMap = ({ bemEstar, id, deleteAlimentacao }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {bemEstar &&
        bemEstar.map((bemEsta) => {
          return (
            <div key={bemEsta.id}>
              <BemEstarUtente
                bemEsta={bemEsta}
                id={id}
                // deleteAlimentacao={deleteAlimentacao}
              />
              ;
            </div>
          );
        })}
    </div>
  );
};

export default AlimentacaoMap;
