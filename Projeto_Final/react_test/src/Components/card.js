import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import ImageAvatars from "./Perfil Utente/perfilUtente";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boderRadius: "70%",
  },
});

export default function PerfilUtente() {
  const classes = useStyles();
  return (
    <Container style={{ background: "rgb(66, 133, 244)" }}>
      <div>
        <Card className={classes.root}>
          <ImageAvatars />

          <Grid
            container
            spacing={10}
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Button variant="contained" size="medium">
                {" "}
                Informações{" "}
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained">Alimentação</Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained"> Saúde </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained">Bem-Estar</Button>
            </Grid>
          </Grid>
        </Card>
      </div>
    </Container>
  );
}
