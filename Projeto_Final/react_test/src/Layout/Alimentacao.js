import React, { Component } from "react";
import AlimentacaoUtente from "../Components/AlimentacaoUtente/AlimentacaoUtente";
import AddRefeicao from "../Components/AddRefeicao";

import FormDialogaddAlimentacao from "../Components/Forms/addAlimentacao/addAlimentacao";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import AlimentacaoMap from "../Components/AlimentacaoUtente/AlimentacaoMap";
import AlimentacaoTop from "../Components/AlimentacaoUtente/AlimentaçãoTop";

import Uid from "../Components/AlimentacaoUtente/Uid";

class Alimentacao extends Component {
  // state = {
  //   refeicoes: [
  //     {
  //       pequenoAlmoco: "Torrada com manteiga e meia de leite",
  //       almoco: "Chanfana com batatas cozidas",
  //       lanche: "Cerelac",
  //       jantar: "Batatas a murro com Bacalhau",
  //       id: 1,
  //     },
  //     {
  //       pequenoAlmoco: "Torrada com geleia e meia de leite",
  //       almoco: "Jardineira",
  //       lanche: "Pão com Chouriço e sumo de laranja",
  //       jantar: "Batatas cozidas com Maruca",
  //       id: 2,
  //     },
  //   ],
  // };

  // addRefeicao = (refeicao) => {
  //   refeicao.id = Math.random();
  //   let refeicoes = [...this.state.refeicoes, refeicao];
  //   this.setState({
  //     refeicoes: refeicoes,
  //   });
  // };

  // deleteRefeicao = (id) => {
  //   let refeicoes = this.state.refeicoes.filter((refeicao) => {
  //     return refeicao.id !== id;
  //   });
  //   this.setState({
  //     refeicoes: refeicoes,
  //   });
  // };

  deleteAlimentacao(Aid, Uid) {
    this.props.deleteAlimentacao(Aid, Uid);
  }

  render() {
    const { auth, alimentacao, id } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    console.log(this.props.id);
    return (
      <div>
        <h1> Todos as refeicoes</h1>
        <div>
          <AlimentacaoTop />
        </div>
        {/* <AlimentacaoUtente
          // refeicoes={this.state.refeicoes}
          deleteRefeicao={this.deleteRefeicao}
          alimentacao={alimentacao}
        /> */}

        <AlimentacaoMap
          alimentacao={alimentacao}
          id={id}
          deleteAlimentacao={this.deleteAlimentacao}
        />
        {/* <AddRefeicao addRefeicao={this.addRefeicao} /> */}
        <Uid id={id} />
        <FormDialogaddAlimentacao id={id} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  console.log(id);
  console.log(state.firestore.ordered.alimentos);

  return {
    id: id,
    utentes: state.firestore.ordered.utentes,
    alimentacao: state.firestore.ordered.alimentos,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: "utentes",
      doc: props.id,
      subcollections: [{ collection: "alimentacao" }],
      storeAs: "alimentos",
    },
  ])
)(Alimentacao);

export const Oid = (id) => {
  return () => {
    this.props.id(id);
  };
};
