import React, { Component } from "react";
import SaudeUtente from "../Components/SaudeUtente/SaudeUtente";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import SaudeUtenteMap from "../Components/SaudeUtente/SaudeUtenteMap";

class Saude extends Component {
  render() {
    const { auth, saudes, prop } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        {/* <SaudeUtente saudes={this.state.saude} /> */}
        <SaudeUtenteMap saudes={saudes} prop={prop} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const prop = ownProps;
  return {
    id: id,
    saudes: state.firestore.ordered.utentes,
    auth: state.firebase.auth,
    prop: prop,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: "utentes",
      doc: props.id,
      // orderBy: ["createdAt", "desc"],
    },
  ])
)(Saude);
