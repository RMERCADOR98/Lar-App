import React, { Component } from "react";

import { connect } from "react-redux"; //para que o component tenha acesso á redux store
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import InfoMap from "../Components/Info/InfoMap";

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
    const { auth, utentes, id } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        <h1> Informações</h1>
        {/* <InfoUtente infos={this.state.info} /> */}
        <InfoMap utentes={utentes} />
        {/* <InfoID /> */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  // console.log(id);
  // console.log(state);
  return {
    id: id,
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
      subcollections: [{ collection: "informações" }],
    },
  ])
)(Info);

// "nIFixHGdEoqbCWU03Hbm"
