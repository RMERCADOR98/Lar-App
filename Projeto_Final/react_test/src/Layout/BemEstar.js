import React, { Component } from "react";
import BemEstarUtente from "../Components/BemEstarUtente/BemEstarUtente";
import AddBemEstar from "../Components/AddBemEstar";

import FormDialogaddBemEstar from "../Components/Forms/addBemEstar/addBemEstar";

import { connect } from "react-redux"; //para que o component tenha acesso á redux store
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import BemEstarMap from "../Components/BemEstarUtente/BemEstarMap";
import BemEstarTop from "../Components/BemEstarUtente/BemEstarTop";

class BemEstar extends Component {
  deleteBemEstar(BEid, Uid) {
    this.props.deleteBemEstar(BEid, Uid);
  }

  render() {
    const { auth, bemEstar, id, prop } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    console.log(bemEstar);
    return (
      <div>
        {/* <BemEstarUtente bes={this.state.bes} deleteBE={this.deleteBE} /> */}

        <BemEstarMap
          bemEstar={bemEstar}
          id={id}
          deleteBemEstar={this.deleteBemEstar}
          prop={prop}
        />

        {/* <AddBemEstar addBE={this.addBE} /> */}
        <FormDialogaddBemEstar id={id} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const prop = ownProps;
  const id = ownProps.match.params.id;

  console.log(state);
  console.log(id);
  return {
    id: id,
    prop: prop,
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
