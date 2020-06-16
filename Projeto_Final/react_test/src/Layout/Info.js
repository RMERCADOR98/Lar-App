import React, { Component } from "react";

import { connect } from "react-redux"; //para que o component tenha acesso á redux store
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import InfoMap from "../Components/Info/InfoMap";
import EditarUtente from "../Components/EditarUtente";

class Info extends Component {
  // state = {
  //   info: {
  //     nome: "João Matos",
  //     alcunha: "Ti João",
  //     idade: "86",
  //     altura: "1,76m",
  //     estadoCivil: "Viúvo",
  //     dataNascimento: "15/04/1934",
  //     nacionalidade: "Portugesa",
  //     id: 1,
  //   },
  // };

  render() {
    const {
      auth,
      utentes,
      id,
      prop,
      match: { url },
    } = this.props;
    console.log(prop);

    const bind = url;

    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        <h1> Informações</h1>
        {/* <InfoUtente infos={this.state.info} /> */}
        <InfoMap utentes={utentes} prop={prop} bind={bind} />
        {/* <EditarUtente prop={prop} /> */}
        {/* <InfoID /> */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  // console.log(id);
  // console.log(state);
  const prop = ownProps;
  return {
    id: id,
    prop: prop,
    utentes: state.firestore.ordered.utentes,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: "utentes",
      doc: props.id,
    },
  ])
)(Info);

// "nIFixHGdEoqbCWU03Hbm"
