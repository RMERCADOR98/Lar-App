import React, { Component } from "react";
import FNA from "./FNA";
import NSE from "./NSE";
import Confirm from "./Confirm";
import NAP from "./NAP";
import NNN from "./NNN";
import GDA from "./GDA";
import CCM from "./CCM";

import firebase from "../../../../Config/fbConfig";

import { createUtente } from "../../../../Store/Actions/UtenteActions";
import { connect } from "react-redux"; //para que o component tenha acesso á redux store

export class UserForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.ref = firebase.firestore.collection("utentes");
  // }
  state = {
    step: 1,

    foto: "",
    url: "",
    nomeCompleto: "",
    alcunha: "",

    nascimento: new Date(),
    sexo: "",
    estadoCivil: "",

    nacionalidade: "",
    altura: "",
    peso: "",

    nCartaoCidadao: "",
    nContribuinte: "",
    nSegurancaSocial: "",

    grupoSanguineo: "",
    doencas: "",
    alergias: "",

    centroSaude: "",
    contactoCentroSaude: "",
    medico: "",

    // ref: this.props.utentes,
  };

  // ref = firebase.firestore();

  //proced to the next step

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //Handle field change

  handleChange = (input) => (e) => {
    console.log(e.target);
    this.setState({
      [input]: e.target.value,
    });
  };

  handleDateChange = (date) => {
    this.setState({
      nascimento: date,
    });
  };

  onChangeComp = (childData) => {
    this.setState({ url: childData });
    console.log("passei aqui");
  };

  handleSubmitFoto = (e) => {
    e.preventDefault();

    this.setState({
      url: this.state.url,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createUtente(this.state);
    this.props.handleClose();
  };

  render() {
    console.log(this.props);
    const { step } = this.state;
    const {
      foto,
      url,
      nomeCompleto,
      alcunha,

      nascimento,
      sexo,
      estadoCivil,

      nacionalidade,
      altura,
      peso,

      nCartaoCidadao,
      nContribuinte,
      nSegurancaSocial,

      grupoSanguineo,
      doencas,
      alergias,

      centroSaude,
      contactoCentroSaude,
      medico,
    } = this.state;
    const values = {
      foto,
      url,
      nomeCompleto,
      alcunha,

      nascimento,
      sexo,
      estadoCivil,

      nacionalidade,
      altura,
      peso,

      nCartaoCidadao,
      nContribuinte,
      nSegurancaSocial,

      grupoSanguineo,
      doencas,
      alergias,

      centroSaude,
      contactoCentroSaude,
      medico,
    };

    console.log(this.state.url);

    switch (step) {
      case 1:
        return (
          <FNA
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            handleChangeFoto={this.handleChangeFoto}
            handleUpload={this.handleUpload}
            handleSubmitFoto={this.handleSubmitFoto}
            onChangeComp={this.onChangeComp}
          />
        );
      case 2:
        return (
          <NSE
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleDateChange={this.handleDateChange}
            values={values}
          />
        );
      case 3:
        return (
          <NAP
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <NNN
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <GDA
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <CCM
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 7:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            handleSubmit={this.handleSubmit}
          />
        );

      default:
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  // const id = ownProps.match.params.id;
  // const ref = state.firestore.ordered.utentes;
  console.log(state.firestore.ordered.utentes);
  return {
    // id: id,
    // ref: ref,
    utentes: state.firestore.ordered.utentes,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUtente: (utente) => dispatch(createUtente(utente)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
