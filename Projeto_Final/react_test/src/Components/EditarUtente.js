import React, { Component } from "react";
import { connect } from "react-redux"; //para que o component tenha acesso á redux store
import { updateUtente } from "../Store/Actions/UtenteActions";

import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { withRouter } from "react-router-dom";

class EditarUtente extends Component {
  state = {
    Id: this.props.id,
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
    this.props.updateUtente(this.state);
  };

  render() {
    // const utente = this.props.match.params.id;
    // console.log(utente);

    const { utente } = this.props;
    console.log(utente);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" onChange={this.handleChange} />
          <br />
          <label htmlFor="idade">Idade:</label>
          <input type="text" id="idade" onChange={this.handleChange} />
          <br />
          <label htmlFor="eCivil">Estado Civil:</label>
          <input
            type="text"
            id="eCivil"
            onChange={this.handleChange}
            value={utente.eCivil}
          />
          <br />
          <button>Update</button>>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  console.log(id);
  const utentes = state.firestore.data.utentes;
  console.log(utentes);
  const utente = utentes ? utentes[id] : null;
  console.log(utente);

  return {
    utente: utente,
    id: id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUtente: (utente, id) => dispatch(updateUtente(utente, id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "utentes" }]),
  withRouter
)(EditarUtente);
