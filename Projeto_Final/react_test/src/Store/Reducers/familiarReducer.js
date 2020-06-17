const initState = {
  familiar: [],
};

const familiarReducer = (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case "CREATE_FAMILIAR":
      console.log("Familiar criado criado!", action.familiar);
      return state;
    case "CREATE_FAMILIAR_ERROR":
      console.log("Erro na criação do familiar", action.err);
      return state;

    case "DELETE_FAMILIAR":
      console.log("Familiar Apagado!", action.familiar);
      return state;
    case "DELETE_FAMILIAR_ERROR":
      console.log("Erro ao apagar Familiar", action.err);
      return state;

    default:
      return state;
  }
  // return state;
};

export default familiarReducer;
