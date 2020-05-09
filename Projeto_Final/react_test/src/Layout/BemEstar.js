import React, { Component } from "react";
import BemEstarUtente from "../Components/BemEstar Utente/BemEstarUtente";
import AddBemEstar from "../Components/AddBemEstar";

import FormDialogaddBemEstar from "../Components/Forms/addBemEstar/addBemEstar";

class BemEstar extends Component {
  state = {
    bes: [
      {
        medicacao: "Tomou",
        banho: "Tomou",
        humor: "Contente",
        observacoes: "Esteve muito bem humurado",
        id: 1,
      },

      {
        medicacao: "Parcial",
        banho: "Não Tomou",
        humor: "Normal",
        observacoes: "Nada a acrescentar",
        id: 2,
      },
    ],
  };

  addBE = (be) => {
    be.id = Math.random();
    let bes = [...this.state.bes, be];
    this.setState({
      bes: bes,
    });
  };

  deleteBE = (id) => {
    let bes = this.state.bes.filter((be) => {
      return be.id !== id;
    });
    this.setState({
      bes: bes,
    });
  };

  render() {
    return (
      <div>
        <h1> Bem Estar</h1>

        <BemEstarUtente bes={this.state.bes} deleteBE={this.deleteBE} />

        <AddBemEstar addBE={this.addBE} />
        <FormDialogaddBemEstar />
      </div>
    );
  }
}

export default BemEstar;
