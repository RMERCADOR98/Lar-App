import React, { Component } from "react";
import AlimentacaoUtente from "../Components/AlimentacaoUtente/AlimentacaoUtente";
import AddRefeicao from "../Components/AddRefeicao";

import FormDialogaddAlimentacao from "../Components/Forms/addAlimentacao/addAlimentacao";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import AlimentacaoMap from "../Components/AlimentacaoUtente/AlimentacaoMap";
import AlimentacaoTop from "../Components/AlimentacaoUtente/AlimentaçãoTop";

import Uid from "../Components/AlimentacaoUtente/Uid";

class Alimentacao extends Component {
  deleteAlimentacao(Aid, Uid) {
    this.props.deleteAlimentacao(Aid, Uid);
  }

  render() {
    const { auth, alimentacao, id, prop } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    console.log(this.props.id);
    return (
      <div>
        {/* <AlimentacaoUtente
          // refeicoes={this.state.refeicoes}
          deleteRefeicao={this.deleteRefeicao}
          alimentacao={alimentacao}
        /> */}

        <AlimentacaoMap
          alimentacao={alimentacao}
          id={id}
          deleteAlimentacao={this.deleteAlimentacao}
          prop={prop}
        />
        {/* <AddRefeicao addRefeicao={this.addRefeicao} /> */}
        {/* <Uid id={id} /> */}
        <FormDialogaddAlimentacao id={id} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const prop = ownProps;
  console.log(id);
  console.log(state.firestore.ordered.alimentos);

  return {
    id: id,
    prop: prop,
    utentes: state.firestore.ordered.utentes,
    alimentacao: state.firestore.ordered.alimentos,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: "utentes",
      doc: props.id,
      subcollections: [{ collection: "alimentacao" }],
      storeAs: "alimentos",
    },
  ])
)(Alimentacao);

// export const Oid = (id) => {
//   return () => {
//     this.props.id(id);
//   };
// };
