import React, { Component } from "react";
import SaudeUtente from "../Components/SaudeUtente/SaudeUtente";
import { connect } from "react-redux"; //para que o component tenha acesso á redux store
import { Redirect } from "react-router-dom";

class Saude extends Component {
  state = {
    saude: {
      grupoSanguineo: "O",
      doencas: "Diabetes Tipo 2",
      alergias: "Amoxicilina",
      centroSaude: "Centro de Saúde de Almalaguês",
      contactoCentroSaude: "239******",
      medico: "Carlos Gonçalves",
      id: 1,
    },
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        <h1> Saúde</h1>

        <SaudeUtente saudes={this.state.saude} />
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

export default connect(mapStateToProps)(Saude);
