const initState = {
  utentes: [
    // { id: "1", title: "help me find peach", content: "blah blah blah" },
    // { id: "2", title: "collect all the stars", content: "blah blah blah" },
    // { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" },
  ],
};

const utenteReducer = (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case "CREATE_UTENTE":
      console.log("Utente criado!", action.utente);
      return state;
    case "CREATE_UTENTE_ERROR":
      console.log("Erro na criação do utente", action.err);
      return state;

    case "DELETE_UTENTE":
      console.log("Utente Apagado!", action.utente);
      return state;
    case "DELETE_UTENTE_ERROR":
      console.log("Erro ao apagar utente", action.err);
      return state;

    case "UPDATE_UTENTE":
      console.log("Utente Atualizado!", action.utente);
      return state;
    case "UPDATE_UTENTE_ERROR":
      console.log("Erro ao atualizar utente", action.err);
      return state;
    default:
      return state;
  }
  // return state;
};

export default utenteReducer;

//Não esquecer que tudo isto irá fazer store no 'project' definido no component rootReducer
