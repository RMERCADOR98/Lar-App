import React, { Component } from "react";
import AlimentacaoUtente from "../Components/AlimentacaoUtente/AlimentacaoUtente";
import AddRefeicao from "../Components/AddRefeicao";

import FormDialogFam from "../Components/Forms/addFamiliar/addFamiliar";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import FamiliarMap from "../Components/FamiliarUtente/FamiliarMap";

class Familiar extends Component {
  deleteFamiliar(Fid, Uid) {
    this.props.deleteFamiliar(Fid, Uid);
  }

  render() {
    const { auth, id, familiar, prop } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    console.log(this.props.id);
    console.log(prop);
    return (
      <div>
        <FamiliarMap
          familiar={familiar}
          deleteFamiliar={this.deleteFamiliar}
          id={id}
          prop={prop}
        />
        <FormDialogFam id={id} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  console.log(id);
  console.log(state.firestore.ordered.familiar);
  const prop = ownProps;
  return {
    id: id,
    prop: prop,
    familiar: state.firestore.ordered.familiar,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: "utentes",
      doc: props.id,
      subcollections: [{ collection: "familiar" }],
      storeAs: "familiar",
    },
  ])
)(Familiar);
