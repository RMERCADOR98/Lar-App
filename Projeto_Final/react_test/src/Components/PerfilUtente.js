import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import ImageAvatars from "./Perfil Utente/perfilUtente";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const PerfilUtente = (props) => {
  const id = props.match.params.id;
  const classes = useStyles();
  return (
    <div
      style={{
        background: "rgb(66, 133, 244)",
        width: "100%",
        height: 1000,
      }}
    >
      <Container>
        <div>
          <Card className={classes.root}>
            <ImageAvatars />
            <h2> Este é Utente com id: {id}</h2>

            <Grid container fluid spacing={2}>
              <Grid item xs={12} sm={6}>
                <Link to={"/Alimentação"} style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "90%", height: 80, marginLeft: 25 }}
                  >
                    Alimentação
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link to={"/Informações"} style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "90%", height: 80, marginRight: 25 }}
                  >
                    Informações
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link to={"/Saúde"} style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      width: "90%",
                      height: 80,
                      marginLeft: 25,
                      marginTop: 6,
                    }}
                  >
                    Saúde
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link to={"/Bem-Estar"} style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      width: "90%",
                      height: 80,
                      marginRight: 25,
                      marginTop: 6,
                      marginBottom: 30,
                    }}
                  >
                    Bem-Estar
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default PerfilUtente;
