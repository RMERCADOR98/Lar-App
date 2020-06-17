import React, { Component } from "react";
import Confirm from "./Confirm";
import Sucess from "./Sucess";
import PA from "./PA";
import JO from "./JO";
import AG from "./AG";

import { createAlimentacao } from "../../../../Store/Actions/AlimentacaoActions";
import { connect } from "react-redux"; //para que o component tenha acesso á redux store

class AlimentacaoForm extends Component {
  state = {
    step: 1,
    Id: this.props.id,

    pequenoalmoco: "",
    almoco: "",

    lanche: "",
    jantar: "",

    alimentacao: "",
    gostou: "",
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
    this.props.createAlimentacao(this.state);
    this.props.handleClose();
  };

  handleChangeRadioAlimentacao = (e) => {
    this.setState({
      alimentacao: e.target.value,
    });
  };

  handleChangeRadioGostou = (e) => {
    this.setState({
      gostou: e.target.value,
    });
  };

  render() {
    console.log(this.props.id);
    const { step } = this.state;
    const {
      pequenoAlmoco,
      almoco,

      lanche,
      jantar,

      alimentacao,
      gostou,
    } = this.state;
    const values = {
      pequenoAlmoco,
      almoco,

      lanche,
      jantar,

      alimentacao,
      gostou,
    };

    switch (step) {
      case 1:
        return (
          <PA
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <JO
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <AG
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleChangeRadioAlimentacao={this.handleChangeRadioAlimentacao}
            handleChangeRadioGostou={this.handleChangeRadioGostou}
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
    createAlimentacao: (alimentacao) =>
      dispatch(createAlimentacao(alimentacao)),
  };
};

export default connect(null, mapDispatchToProps)(AlimentacaoForm);
