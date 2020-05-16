import React, { Component } from "react";
import { connect } from "react-redux"; //para que o component tenha acesso á redux store
import { updateUtente } from "../Store/Actions/utenteActions";

import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { withRouter } from "react-router-dom";

class EditarUtente extends Component {
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
    this.props.updateUtente(this.state);
  };

  render() {
    const utenteId = this.props.match.params.id;
    console.log(utenteId);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <label htmlFor="nome">Nome:</label>
          <input
            type="hiden"
            disabled
            id="nome"
            onChange={this.handleChange}
            value={utenteId}
          />
          <br /> */}
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" onChange={this.handleChange} />
          <br />
          <label htmlFor="idade">Idade:</label>
          <input type="text" id="idade" onChange={this.handleChange} />
          <br />
          <label htmlFor="eCivil">Estado Civil:</label>
          <input type="text" id="eCivil" onChange={this.handleChange} />
          <br />
          <button
          // onClick={() => {
          //   updateUtente(utenteId);
          // }}
          >
            Update
          </button>
          >
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   //   console.log(ownProps);
//   const id = ownProps.match.params.id;
//   const utentes = state.firestore.data.utentes;
//   //   console.log(utentes);
//   const utente = utentes ? utentes[id] : null;

//   return {
//     utente: utente,
//   };
// };

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  console.log(id);
  const utentes = state.firestore.data.utentes;
  console.log(utentes);
  const utente = utentes ? utentes[id] : null;

  return {
    utente: utente,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUtente: (utente) => dispatch(updateUtente(utente)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "utentes" }]),
  withRouter
)(EditarUtente);
