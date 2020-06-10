const initState = {
  alimentacao: [],
};

const alimentacaoReducer = (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case "CREATE_ALIMENTACAO":
      console.log("Alimentação criada criado!", action.alimentacao);
      return state;
    case "CREATE_ALIMENTACAO_ERROR":
      console.log("Erro na criação da alimentação", action.err);
      return state;

    case "DELETE_ALIMENTACAO":
      console.log("Alimentação Apagada!", action.alimentacao);
      return state;
    case "DELETE_UTENTE_ERROR":
      console.log("Erro ao apagar Alimentação", action.err);
      return state;

    default:
      return state;
  }
  // return state;
};

export default alimentacaoReducer;
