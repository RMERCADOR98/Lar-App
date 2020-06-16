import React, { Component } from "react";
import { connect } from "react-redux"; //para que o component tenha acesso á redux store
import { updateUtente } from "../Store/Actions/UtenteActions";

import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { withRouter } from "react-router-dom";

import EditarUtenteMap from "./EditarUtente/EditarUtenteMap";
import { Button, TextField, Grid } from "@material-ui/core";

class EditarUtente extends Component {
  state = {
    Id: this.props.id,
    // nomeCompleto: "",
    // alcunha: "",
    // idade: "",

    // sexo: "",
    // estadoCivil: "",
    // nacionalidade: "",
    // altura: "",
    // peso: "",

    // nCartaoCidadao: "",
    // nContribuinte: "",
    // nSegurancaSocial: "",

    // grupoSanguineo: "",
    // doencas: "",
    // alergias: "",

    // centroSaude: "",
    // contactoCentroSaude: "",
    // medico: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateUtente(this.state);
    this.props.history.goBack();
  };

  handleChangeMUI = (input) => (e) => {
    console.log(e.target);
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    // const utente = this.props.match.params.id;
    // console.log(utente);

    const utente = this.props.utente;
    console.log(utente);

    const prop = this.props;
    console.log(prop);

    return (
      <div key={utente.id}>
        <form onSubmit={this.handleSubmit}>
          <Grid style={{ flex: 1 }} container fluid>
            <Grid item xs={6}>
              <TextField
                label="Nome"
                onChange={this.handleChangeMUI("nomeCompleto")}
                defaultValue={utente.nomeCompleto}
              />

              <TextField
                label="Alcunha"
                onChange={this.handleChangeMUI("alcunha")}
                defaultValue={utente.alcunha}
              />
              <p></p>
              <TextField
                label="Idade"
                onChange={this.handleChangeMUI("idade")}
                defaultValue={utente.idade}
              />

              <TextField
                label="Sexo"
                onChange={this.handleChangeMUI("sexo")}
                defaultValue={utente.sexo}
              />

              <TextField
                label="Estado Civil"
                onChange={this.handleChangeMUI("estadoCivil")}
                defaultValue={utente.estadoCivil}
              />
              <p></p>

              <TextField
                label="Nacionalidade"
                onChange={this.handleChangeMUI("nacionalidade")}
                defaultValue={utente.nacionalidade}
              />
              <TextField
                label="Altura"
                onChange={this.handleChangeMUI("altura")}
                defaultValue={utente.altura}
              />

              <TextField
                label="Peso"
                onChange={this.handleChangeMUI("peso")}
                defaultValue={utente.peso}
              />

              <p></p>
              <TextField
                label="Cartão Cidadão"
                onChange={this.handleChangeMUI("nCartaoCidadao")}
                defaultValue={utente.nCartaoCidadao}
              />
              <TextField
                label="Cartão Contribuinte"
                onChange={this.handleChangeMUI("nCartaoContribuinte")}
                defaultValue={utente.nCartaoContribuinte}
              />
              <TextField
                label="Segurança Social"
                onChange={this.handleChangeMUI("nSegurancaSocial")}
                defaultValue={utente.nSegurancaSocial}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Grupo Sanguíneo"
                onChange={this.handleChangeMUI("grupoSanguineo")}
                defaultValue={utente.grupoSanguineo}
              />
              <TextField
                label="Doenças"
                onChange={this.handleChangeMUI("doencas")}
                defaultValue={utente.doencas}
              />
              <TextField
                label="Alergias"
                onChange={this.handleChangeMUI("alergias")}
                defaultValue={utente.alergias}
              />
              <p></p>
              <TextField
                label="Centro de Saúde"
                onChange={this.handleChangeMUI("centroSaude")}
                defaultValue={utente.centroSaude}
              />
              <TextField
                label="Contacto"
                onChange={this.handleChangeMUI("contactoCentroSaude")}
                defaultValue={utente.contactoCentroSaude}
              />
              <TextField
                label="Médico"
                onChange={this.handleChangeMUI("medico")}
                defaultValue={utente.medico}
              />
            </Grid>
          </Grid>

          {/* <label htmlFor="estadoCivil">Estado Civil:</label> */}
          {/* <input
            type="text"
            id="eCivil"
            onChange={this.handleChange}
            value={utente.eCivil}
          />*/}
          <br />
          <button
            style={{ background: "transparent", border: "none", fontSize: "0" }}
          >
            <Button variant="contained" color="primary">
              Update
            </Button>
          </button>
        </form>
        {/* <EditarUtenteMap utentes={utente} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  console.log(id);
  const utentes = state.firestore.data.utentes;
  console.log(utentes);
  const utente = utentes ? utentes[id] : null;
  console.log(utente);

  return {
    utente: utente,
    id: id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUtente: (utente, id) => dispatch(updateUtente(utente, id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "utentes" }]),
  withRouter
)(EditarUtente);
