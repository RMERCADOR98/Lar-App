import React, { Component } from "react";
import FNA from "./FNA";
import NSE from "./NSE";
import Confirm from "./Confirm";
import Sucess from "./Sucess";
import NAP from "./NAP";
import NNN from "./NNN";
import GDA from "./GDA";
import CCM from "./CCM";

export class UserForm extends Component {
  state = {
    step: 1,

    foto: "",
    nomeCompleto: "",
    alcunha: "",

    nascimento: "",
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
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
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
          />
        );
      case 8:
        return <Sucess />;
      default:
    }
  }
}

export default UserForm;
