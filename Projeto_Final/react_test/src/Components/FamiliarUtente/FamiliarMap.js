import React from "react";

import { makeStyles, Card } from "@material-ui/core";
import FamiliarUtente from "./FamiliarUtente";
import { Container } from "@material-ui/core";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Grid, CardHeader, Avatar, Fab } from "@material-ui/core";
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

const FamiliarMap = ({ familiar, id, deleteFamiliar, prop }) => {
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
          title={<h1>Familiares</h1>}
        ></CardHeader>

        <div className={classes.root}>
          {familiar &&
            familiar.map((familia) => {
              return (
                <div key={familiar.id}>
                  <FamiliarUtente
                    familia={familia}
                    id={id}
                    deleteFamiliar={deleteFamiliar}
                  />
                </div>
              );
            })}
        </div>
      </Card>
    </Container>
  );
};

export default FamiliarMap;
