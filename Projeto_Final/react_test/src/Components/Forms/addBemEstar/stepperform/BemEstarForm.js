import React, { Component } from "react";
import Confirm from "./Confirm";
import Sucess from "./Sucess";
import MB from "./MB";
import HO from "./HO";

import { createBemEstar } from "../../../../Store/Actions/BemEstarActions";
import { connect } from "react-redux"; //para que o component tenha acesso á redux store

class BemEstarForm extends Component {
  state = {
    step: 1,
    Id: this.props.id,

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

  handleChangeRadio = (e) => {
    this.setState({
      medicacao: e.target.value,
    });
  };

  handleChangeRadioBanho = (e) => {
    this.setState({
      banho: e.target.value,
    });
  };
  handleChangeRadioHumor = (e) => {
    this.setState({
      humor: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createBemEstar(this.state);
    this.props.handleClose();
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
            // handleChangeCheck={this.handleChangeCheck}
            handleChangeRadio={this.handleChangeRadio}
            handleChangeRadioBanho={this.handleChangeRadioBanho}
            values={values}
          />
        );
      case 2:
        return (
          <HO
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleChangeRadioHumor={this.handleChangeRadioHumor}
            values={values}
          />
        );

      case 3:
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
    createBemEstar: (bemEstar) => dispatch(createBemEstar(bemEstar)),
  };
};

export default connect(null, mapDispatchToProps)(BemEstarForm);
