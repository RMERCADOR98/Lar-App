import React from "react";

import { makeStyles } from "@material-ui/core";
import BemEstarUtente from "./BemEstarUtente";
import { Card, Container } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: { flexGrow: 1, marginTop: theme.spacing(3), textAlign: "center" },
}));

const AlimentacaoMap = ({ bemEstar, id, deleteBemEstar }) => {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.card}>
        <div className={classes.root}>
          {bemEstar &&
            bemEstar.map((bemEsta) => {
              return (
                <div key={bemEsta.id}>
                  <BemEstarUtente
                    bemEsta={bemEsta}
                    id={id}
                    deleteBemEstar={deleteBemEstar}
                  />
                </div>
              );
            })}
        </div>
      </Card>
    </Container>
  );
};

export default AlimentacaoMap;
