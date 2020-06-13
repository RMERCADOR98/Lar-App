const initState = {
  bemEstar: [],
};

const bemEstarReducer = (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case "CREATE_BEMESTAR":
      console.log("Bem estar criada criado!", action.bemEstar);
      return state;
    case "CREATE_BEMESTAR_ERROR":
      console.log("Erro na criação do bem estar", action.err);
      return state;

    case "DELETE_BEMESTAR":
      console.log("Bem estar Apagada!", action.bemEstar);
      return state;
    case "DELETE_BEMESTAR_ERROR":
      console.log("Erro ao apagar bem Estar", action.err);
      return state;

    default:
      return state;
  }
  // return state;
};

export default bemEstarReducer;
