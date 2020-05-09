import React, { Component } from "react";
import SaudeUtente from "../Components/SaudeUtente/SaudeUtente";

class Saude extends Component {
  state = {
    saude: {
      grupoSanguineo: "O",
      doencas: "Diabetes Tipo 2",
      alergias: "Amoxicilina",
      centroSaude: "Centro de Saúde de Almalaguês",
      contactoCentroSaude: "239******",
      medico: "Carlos Gonçalves",
      id: 1,
    },
  };

  render() {
    return (
      <div>
        <h1> Saúde</h1>

        <SaudeUtente saudes={this.state.saude} />
      </div>
    );
  }
}

export default Saude;
