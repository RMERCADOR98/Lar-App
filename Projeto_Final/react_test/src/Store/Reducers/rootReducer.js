import utenteReducer from "./utenteReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  utente: utenteReducer,
  firestore: firestoreReducer, // vai automaticamente ligar a bd da firestore com o state da store no background
});

export default rootReducer;
