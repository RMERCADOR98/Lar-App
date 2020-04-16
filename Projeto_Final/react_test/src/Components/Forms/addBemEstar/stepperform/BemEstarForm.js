import React, { Component } from "react";
import Confirm from "./Confirm";
import Sucess from "./Sucess";
import MB from "./MB";
import HO from "./HO";

export default class BemEstarForm extends Component {
  state = {
    step: 1,

    medicacao: "",
    banho: "",

    humor: "",
    observacoes: "",
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
      medicacao,
      banho,

      humor,
      observacoes,
    } = this.state;
    const values = {
      medicacao,
      banho,

      humor,
      observacoes,
    };

    switch (step) {
      case 1:
        return (
          <MB
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <HO
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Sucess />;
      default:
    }
  }
}
