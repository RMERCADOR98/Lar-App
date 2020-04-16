import React, { Component } from "react";

class AddUtente extends Component {
  state = {
    nome: null,
    idade: null,
    eCivil: null,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUtente(this.state);
    this.setState({
      nome: "",
      idade: "",
      eCivil: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" onChange={this.handleChange} />

          <label htmlFor="idade">Idade:</label>
          <input type="text" id="idade" onChange={this.handleChange} />

          <label htmlFor="eCivil">Estado Civil:</label>
          <input type="text" id="eCivil" onChange={this.handleChange} />

          <button>Adicionar Utente</button>
        </form>
      </div>
    );
  }
}

export default AddUtente;
