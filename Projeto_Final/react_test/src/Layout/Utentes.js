import React, { Component } from "react";
import ListaUtentes from "../Components/ListaUtentes";
import AddUtente from "../Components/AddUtente";
import FormDialog from "../Components/Forms/addUtente/addUtente";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { Redirect } from "react-router-dom";

class Utentes extends Component {
  // state = {
  //   utentes: [
  //     { nome: "João Matos", idade: "81", eCivil: "viuvo", id: 1 },
  //     { nome: "Ti Maria", idade: "78", eCivil: "viuva", id: 2 },
  //     { nome: "João Matos", idade: "81", eCivil: "viuvo", id: 3 },
  //     { nome: "Ti Maria", idade: "78", eCivil: "viuva", id: 4 },
  //     { nome: "Ti Maria", idade: "78", eCivil: "viuva", id: 5 },
  //   ],
  // };

  // addUtente = (utente) => {
  //   utente.id = Math.random();
  //   let utentes = [...this.state.utentes, utente];
  //   this.setState({
  //     utentes: utentes,
  //   });
  // };

  // deleteUtente = (id) => {
  //   let utentes = this.state.utentes.filter((utente) => {
  //     return utente.id !== id;
  //   });
  //   this.setState({
  //     utentes: utentes,
  //   });
  // };

  render() {
    // console.log(this.props);
    const { utentes, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      // <div>
      //   <h1> Todos os utentes</h1>

      //   {/* <Utente utentes={this.state.utentes} deleteUtente={this.deleteUtente} /> */}

      //   <AddUtente addUtente={this.addUtente} />
      //   <FormDialog />
      // </div>

      <div>
        <ListaUtentes utentes={utentes} />
        {/* <AddUtente /> */}
        <FormDialog />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    utentes: state.firestore.ordered.utentes,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "utentes", orderBy: ["createdAt", "desc"] }])
)(Utentes);
