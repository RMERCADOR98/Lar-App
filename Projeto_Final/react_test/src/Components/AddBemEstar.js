import React, { Component } from "react";

class AddBemEstar extends Component {
  state = {
    medicacao: null,
    banho: null,
    humor: null,
    observacoes: null,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBE(this.state);
    this.setState({
      medicacao: "",
      banho: "",
      humor: "",
      observacoes: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="medicacao">Medicação:</label>
          <input type="text" id="medicacao" onChange={this.handleChange} />

          <label htmlFor="banho">Banho:</label>
          <input type="text" id="banho" onChange={this.handleChange} />

          <label htmlFor="humor">Humor:</label>
          <input type="text" id="humor" onChange={this.handleChange} />

          <label htmlFor="observacoes">observacoes:</label>
          <input type="text" id="observacoes" onChange={this.handleChange} />

          <button>Adicionar Bem Estar</button>
        </form>
      </div>
    );
  }
}

export default AddBemEstar;
