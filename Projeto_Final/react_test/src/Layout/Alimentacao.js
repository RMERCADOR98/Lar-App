import React, { Component } from "react";
import AlimentacaoUtente from "../Components/AlimentacaoUtente/AlimentacaoUtente";
import AddRefeicao from "../Components/AddRefeicao";

import FormDialogaddAlimentacao from "../Components/Forms/addAlimentacao/addAlimentacao";

class Alimentacao extends Component {
  state = {
    refeicoes: [
      {
        pequenoAlmoco: "Torrada com manteiga e meia de leite",
        almoco: "Chanfana com batatas cozidas",
        lanche: "Cerelac",
        jantar: "Batatas a murro com Bacalhau",
        id: 1,
      },
      {
        pequenoAlmoco: "Torrada com geleia e meia de leite",
        almoco: "Jardineira",
        lanche: "Pão com Chouriço e sumo de laranja",
        jantar: "Batatas cozidas com Maruca",
        id: 2,
      },
    ],
  };

  addRefeicao = (refeicao) => {
    refeicao.id = Math.random();
    let refeicoes = [...this.state.refeicoes, refeicao];
    this.setState({
      refeicoes: refeicoes,
    });
  };

  deleteRefeicao = (id) => {
    let refeicoes = this.state.refeicoes.filter((refeicao) => {
      return refeicao.id !== id;
    });
    this.setState({
      refeicoes: refeicoes,
    });
  };

  render() {
    return (
      <div>
        <h1> Todos as refeicoes</h1>

        <AlimentacaoUtente
          refeicoes={this.state.refeicoes}
          deleteRefeicao={this.deleteRefeicao}
        />

        <AddRefeicao addRefeicao={this.addRefeicao} />
        <FormDialogaddAlimentacao />
      </div>
    );
  }
}

export default Alimentacao;
