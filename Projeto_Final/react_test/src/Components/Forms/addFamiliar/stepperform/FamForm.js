import React, { Component } from "react";
import FNE from "./FNE";
import Confirm from "./Confirm";
import Sucess from "./Sucess";
import CMA from "./CMA";
import NNN from "./NNN";

export class UserForm extends Component {
  state = {
    step: 1,

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
          />
        );
      case 5:
        return <Sucess />;
      default:
    }
  }
}

export default UserForm;
