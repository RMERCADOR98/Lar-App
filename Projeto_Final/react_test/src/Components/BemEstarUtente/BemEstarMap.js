import React from "react";
import { Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import BemEstarUtente from "./BemEstarUtente";
import { Card, Avatar, CardHeader, Fab } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import BemEstarTop from "./BemEstarTop";

const Styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: { flexGrow: 1, marginTop: theme.spacing(3) },
  arrow: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  voltar: {
    margin: "0 auto",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const bemEstarMap = ({ bemEstar, id, deleteBemEstar, prop }) => {
  const classes = Styles();

  return (
    <Container>
      <Card className={classes.card}>
        <CardHeader
          style={{
            textAlign: "center",
            marginRight: "60px",
          }}
          avatar={
            <Avatar aria-label="voltar" className={classes.voltar}>
              <Fab
                variant="contained"
                color="secondary"
                className={classes.voltar}
                onClick={() => {
                  prop.history.goBack();
                }}
              >
                <ArrowBackIcon className={classes.arrow} />
              </Fab>
            </Avatar>
          }
          title={<h1>Bem Estar</h1>}
        ></CardHeader>
        <BemEstarTop />
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
        <p></p>
      </Card>
    </Container>
  );
};

export default bemEstarMap;
