import React, { Component } from "react";
import FNA from "./FNA";
import NSE from "./NSE";
import Confirm from "./Confirm";
import NAP from "./NAP";
import NNN from "./NNN";
import GDA from "./GDA";
import CCM from "./CCM";

import { createUtente } from "../../../../Store/Actions/UtenteActions";
import { connect } from "react-redux"; //para que o component tenha acesso á redux store

export class UserForm extends Component {
  state = {
    step: 1,

    foto: "",
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
  };

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

    switch (step) {
      case 1:
        return (
          <FNA
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
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
const mapDispatchToProps = (dispatch) => {
  return {
    createUtente: (utente) => dispatch(createUtente(utente)),
  };
};

export default connect(null, mapDispatchToProps)(UserForm);
