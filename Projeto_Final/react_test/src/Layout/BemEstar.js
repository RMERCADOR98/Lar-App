import React, { Component } from "react";
import BemEstarUtente from "../Components/BemEstar Utente/BemEstarUtente";
import AddBemEstar from "../Components/AddBemEstar";

import FormDialogaddBemEstar from "../Components/Forms/addBemEstar/addBemEstar";

import { connect } from "react-redux"; //para que o component tenha acesso á redux store
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import BemEstarMapMap from "../Components/BemEstar Utente/BemEstarMap";

class BemEstar extends Component {
  // state = {
  //   bes: [
  //     {
  //       medicacao: "Tomou",
  //       banho: "Tomou",
  //       humor: "Contente",
  //       observacoes: "Esteve muito bem humurado",
  //       id: 1,
  //     },

  //     {
  //       medicacao: "Parcial",
  //       banho: "Não Tomou",
  //       humor: "Normal",
  //       observacoes: "Nada a acrescentar",
  //       id: 2,
  //     },
  //   ],
  // };

  // addBE = (be) => {
  //   be.id = Math.random();
  //   let bes = [...this.state.bes, be];
  //   this.setState({
  //     bes: bes,
  //   });
  // };

  // deleteBE = (id) => {
  //   let bes = this.state.bes.filter((be) => {
  //     return be.id !== id;
  //   });
  //   this.setState({
  //     bes: bes,
  //   });
  // };

  deleteBemEstar(BEid, Uid) {
    this.props.deleteBemEstar(BEid, Uid);
  }

  render() {
    const { auth, bemEstar, id } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        <h1> Bem Estar</h1>

        {/* <BemEstarUtente bes={this.state.bes} deleteBE={this.deleteBE} /> */}

        <BemEstarMapMap
          bemEstar={bemEstar}
          id={id}
          // deleteAlimentacao={this.deleteAlimentacao}
        />

        {/* <AddBemEstar addBE={this.addBE} /> */}
        <FormDialogaddBemEstar id={id} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  console.log(state);
  console.log(id);
  return {
    id: id,
    utentes: state.firestore.ordered.utentes,
    bemEstar: state.firestore.ordered.bemEstar,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: "utentes",
      doc: props.id,
      subcollections: [{ collection: "bemEstar" }],
      storeAs: "bemEstar",
    },
  ])
)(BemEstar);
