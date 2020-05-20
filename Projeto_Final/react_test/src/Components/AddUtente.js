import React, { Component } from "react";
import { connect } from "react-redux"; //para que o component tenha acesso á redux store
import { createUtente } from "../Store/Actions/UtenteActions";

class AddUtente extends Component {
  state = {
    nome: "",
    idade: "",
    eCivil: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.addUtente(this.state);
    // this.setState({
    //   nome: "",
    //   idade: "",
    //   eCivil: "",
    // });
    this.props.createUtente(this.state);
  };

  render() {
    const props = this.props;
    console.log(props);
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

const mapDispatchToProps = (dispatch) => {
  return {
    createUtente: (utente) => dispatch(createUtente(utente)),
  };
};

export default connect(null, mapDispatchToProps)(AddUtente);
