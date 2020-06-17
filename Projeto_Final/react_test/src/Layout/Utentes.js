import React, { Component } from "react";
import ListaUtentes from "../Components/ListaUtentes";
import AddUtente from "../Components/AddUtente";
import FormDialog from "../Components/Forms/addUtente/addUtente";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { Redirect } from "react-router-dom";

class Utentes extends Component {
  render() {
    const { utentes, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        <ListaUtentes utentes={utentes} />
        {/* <AddUtente /> */}
        <FormDialog />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.firebase.storage);
  return {
    utentes: state.firestore.ordered.utentes,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "utentes",
      orderBy: ["createdAt", "desc"],
    },
  ])
)(Utentes);
