import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boderRadius: "70%"
  },
  margin: {
    marginTop: 200
  }
});

export default function Janela() {
  const classes = useStyles();

  return (
    <Container
      style={{ background: "rgb(66, 133, 244)" }}
      className={classes.margin}
    >
      <Card className={classes.root}>Aqui vaio estar os velhinhos</Card>
    </Container>
  );
}
