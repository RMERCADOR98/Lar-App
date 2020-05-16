import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import ImageAvatars from "./Perfil Utente/perfilUtente";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import { connect } from "react-redux"; //conecta o component com o redux
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { deleteUtente } from "../Store/Actions/utenteActions";
import EditarUtente from "./EditarUtente";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, NavLink } from "react-router-dom";

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
  const { utente, deleteUtente } = props;

  console.log(props);

  let utenteId = props.match.params.id;

  console.log(utenteId);
  const classes = useStyles();

  if (utente) {
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
              <span>Utente ID : {utenteId}</span>
              <br />
              <span>Nome : {utente.nome}</span>
              <br />
              <span>Estado Civil : {utente.eCivil}</span>
              <br />
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
          </div>
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
