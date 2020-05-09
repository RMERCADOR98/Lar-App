import React, { Component } from "react";
import Utente from "./Utente";
import AddUtente from "../Components/AddUtente";
import FormDialog from "../Components/Forms/addUtente/addUtente";

class Utentes extends Component {
  state = {
    utentes: [
      { nome: "João Matos", idade: "81", eCivil: "viuvo", id: 1 },
      { nome: "Ti Maria", idade: "78", eCivil: "viuva", id: 2 },
      { nome: "João Matos", idade: "81", eCivil: "viuvo", id: 3 },
      { nome: "Ti Maria", idade: "78", eCivil: "viuva", id: 4 },
      { nome: "Ti Maria", idade: "78", eCivil: "viuva", id: 5 },
    ],
  };

  addUtente = (utente) => {
    utente.id = Math.random();
    let utentes = [...this.state.utentes, utente];
    this.setState({
      utentes: utentes,
    });
  };

  deleteUtente = (id) => {
    let utentes = this.state.utentes.filter((utente) => {
      return utente.id !== id;
    });
    this.setState({
      utentes: utentes,
    });
  };

  render() {
    return (
      <div>
        <h1> Todos os utentes</h1>

        <Utente utentes={this.state.utentes} deleteUtente={this.deleteUtente} />

        <AddUtente addUtente={this.addUtente} />
        <FormDialog />
      </div>
    );
  }
}

export default Utentes;
