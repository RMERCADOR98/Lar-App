import utenteReducer from "./utenteReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import alimentacaoReducer from "./alimentacaoReducer";
import bemEstarReducer from "./bemestarReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  utente: utenteReducer,
  alimentacao: alimentacaoReducer,
  bemEstar: bemEstarReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
