import React, { Component } from "react";
import FNE from "./FNE";
import Confirm from "./Confirm";
import Sucess from "./Sucess";
import CMA from "./CMA";
import NNN from "./NNN";

import { createFamiliar } from "../../../../Store/Actions/FamiliarActions";
import { connect } from "react-redux"; //para que o component tenha acesso á redux store

export class FamForm extends Component {
  state = {
    step: 1,
    Id: this.props.id,

    foto: "",
    nomeCompleto: "",
    email: "",

    contacto: "",
    morada: "",
    afiliacao: "",

    nCartaoCidadao: "",
    nContribuinte: "",
    nSegurancaSocial: "",
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
    this.setState({
      [input]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createFamiliar(this.state);
    this.props.handleClose();
  };

  render() {
    const { step } = this.state;
    const {
      foto,
      nomeCompleto,
      email,

      contacto,
      morada,
      afiliacao,

      nCartaoCidadao,
      nContribuinte,
      nSegurancaSocial,
    } = this.state;
    const values = {
      foto,
      nomeCompleto,
      email,

      contacto,
      morada,
      afiliacao,

      nCartaoCidadao,
      nContribuinte,
      nSegurancaSocial,
    };

    switch (step) {
      case 1:
        return (
          <FNE
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <CMA
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <NNN
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 4:
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
    createFamiliar: (familiar) => dispatch(createFamiliar(familiar)),
  };
};

export default connect(null, mapDispatchToProps)(FamForm);
