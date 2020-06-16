import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Store/Reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance,
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import fbConfig from "./Config/fbConfig";
import firebase from "firebase/app";

import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

import CircularIndeterminate from "./LoadingIndex";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { PersistGate } from "redux-persist/integration/react";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistentReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(fbConfig, { attachAuthIsReady: true })
  )
);

// const persistor = persistStore(store);

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  userProfile: "users", // where profiles are stored in database
  presence: "presence", // where list of online users is stored in database
  sessions: "sessions",
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <div>
        <CircularIndeterminate />
      </div>
    );
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
