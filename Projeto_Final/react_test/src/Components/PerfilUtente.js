import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import ImageAvatars from "./Perfil Utente/perfilUtente";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import BotaoFamiliar from "./Perfil Utente/BotaoFamiliar";

import { connect } from "react-redux"; //conecta o component com o redux
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { deleteUtente } from "../Store/Actions/UtenteActions";
import EditarUtente from "./EditarUtente";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import BadgePerfilUtente from "./Badges/BadgePerfilUtente";

import Info from "../Layout/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const PerfilUtente = (props) => {
  const {
    utente,
    deleteUtente,
    auth,
    match: { url },
  } = props;

  let utenteId = props.match.params.id;

  console.log(utenteId);

  console.log(url);

  const classes = useStyles();
  if (!auth.uid) return <Redirect to="/signin" />;

  if (utente) {
    console.log(utente);
    return (
      <div
        style={{
          flex: 1,
        }}
      >
        <Container className={classes.root}>
          {/* <BadgePerfilUtente> */}

          <Card>
            <Grid
              container
              fluid
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <Grid item lg={4}>
                <ImageAvatars />
              </Grid>
              <Grid
                item
                lg={4}
                style={{
                  flex: 1,
                  textAlign: "justify",
                  alignItems: "center",
                }}
              >
                <span>
                  <b>Nome:</b> {utente.nome}
                </span>
                <br />
                <span>
                  <b>Entrada:</b>{" "}
                  {new Date(utente.createdAt.seconds * 1000).toLocaleDateString(
                    "pt-PT"
                  )}
                </span>
                <br />
              </Grid>
              <Grid item xs={4}>
                <BotaoFamiliar />
              </Grid>
            </Grid>
            <Grid container fluid spacing={2}>
              <Grid item xs={12} sm={6}>
                <Link
                  exact
                  to={"/Alimentação"}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      width: "90%",
                      height: 80,
                      marginLeft: 25,
                      background: "white",
                    }}
                  >
                    Alimentação
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link
                  to={"/Informações/" + utenteId}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      width: "90%",
                      height: 80,
                      marginRight: 25,
                      background: "white",
                    }}
                  >
                    Informações
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link to={"/Saúde"} style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    style={{
                      width: "90%",
                      height: 80,
                      marginLeft: 25,
                      marginTop: 6,
                      background: "white",
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
                    style={{
                      width: "90%",
                      height: 80,
                      marginRight: 25,
                      marginTop: 6,
                      marginBottom: 30,
                      background: "white",
                    }}
                  >
                    Bem-Estar
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Router>
              <Route path="/editarUtente/:id" component={EditarUtente} />

              <div key={utente.id}>
                <NavLink
                  to={"/editarUtente/" + utenteId}
                  exact
                  activeStyle={{ color: "green" }}
                >
                  {/* <EditarUtente utenteId={utenteId} /> */}
                  HEre
                </NavLink>
              </div>
              <br />
            </Router>
            <br />
            <button
              onClick={() => {
                deleteUtente(utenteId);
                props.history.push("/");
              }}
            >
              Delete
            </button>
          </Card>

          {/* </BadgePerfilUtente> */}
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <p> A carregar Utente...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const utentes = state.firestore.data.utentes;
  const utente = utentes ? utentes[id] : null;

  return {
    utente: utente,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUtente: (utenteId) => dispatch(deleteUtente(utenteId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "utentes" }])
)(PerfilUtente);
