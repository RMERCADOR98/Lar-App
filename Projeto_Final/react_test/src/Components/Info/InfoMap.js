import React from "react";

import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import InfoUtente from "./InfoUtente";
import { Container, CardHeader, Avatar, Fab, Card } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
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

const InfoMap = ({ utentes, prop, bind }) => {
  const classes = useStyles();

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
          title={<h1>Informações</h1>}
        ></CardHeader>
        <div className={classes.root}>
          {utentes &&
            utentes.map((utente) => {
              return <InfoUtente utente={utente} prop={prop} bind={bind} />;
            })}
        </div>
      </Card>
    </Container>
  );
};

export default InfoMap;
