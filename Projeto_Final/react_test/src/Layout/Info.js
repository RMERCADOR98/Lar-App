import React, { Component } from "react";
import InfoUtente from "../Components/Info/InfoUtente";

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
    return (
      <div>
        <h1> Informações</h1>

        <InfoUtente infos={this.state.info} />
      </div>
    );
  }
}

export default Info;
