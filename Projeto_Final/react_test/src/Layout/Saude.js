import React, { Component } from "react";
import SaudeUtente from "../Components/SaudeUtente/SaudeUtente";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import SaudeUtenteMap from "../Components/SaudeUtente/SaudeUtenteMap";

class Saude extends Component {
  // state = {
  //   saude: {
  //     grupoSanguineo: "O",
  //     doencas: "Diabetes Tipo 2",
  //     alergias: "Amoxicilina",
  //     centroSaude: "Centro de Saúde de Almalaguês",
  //     contactoCentroSaude: "239******",
  //     medico: "Carlos Gonçalves",
  //     id: 1,
  //   },
  // };

  render() {
    const { auth, saudes } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        <h1> Saúde</h1>

        {/* <SaudeUtente saudes={this.state.saude} /> */}
        <SaudeUtenteMap saudes={saudes} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  return {
    id: id,
    saudes: state.firestore.ordered.utentes,
    auth: state.firebase.auth,
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
