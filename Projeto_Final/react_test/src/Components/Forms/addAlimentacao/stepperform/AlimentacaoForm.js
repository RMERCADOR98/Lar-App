import React, { Component } from "react";
import Confirm from "./Confirm";
import Sucess from "./Sucess";
import PA from "./PA";
import JO from "./JO";

export default class AlimentacaoForm extends Component {
  state = {
    step: 1,

    pequenoalmoco: "",
    almoco: "",

    jantar: "",
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
      pequenoAlmoco,
      almoco,

      jantar,
      observacoes,
    } = this.state;
    const values = {
      pequenoAlmoco,
      almoco,

      jantar,
      observacoes,
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
