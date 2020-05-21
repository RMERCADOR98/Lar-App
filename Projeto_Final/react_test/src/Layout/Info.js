import React, { Component } from "react";
import InfoUtente from "../Components/Info/InfoUtente";
import { connect } from "react-redux"; //para que o component tenha acesso á redux store
import { Redirect } from "react-router-dom";

class Info extends Component {
  state = {
    info: {
      nome: "João Matos",
      alcunha: "Ti João",
      idade: "86",
      altura: "1,76m",
      estadoCivil: "Viúvo",
      dataNascimento: "15/04/1934",
      nacionalidade: "Portugesa",
      id: 1,
    },
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        <h1> Informações</h1>

        <InfoUtente infos={this.state.info} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Info);
