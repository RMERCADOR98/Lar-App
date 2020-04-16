import React, { Component } from "react";
import ButtonAppBar from "./Components/Navbar";
import Utente from "./Layout/Utente";
import Familiares from "./Layout/Familiares";
import Utentes from "./Layout/Utentes";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <ButtonAppBar />

        <BrowserRouter>
          <NavLink to={"/Utentes"} exact activeStyle={{ color: "green" }}>
            Utentes
          </NavLink>
          <br />

          <NavLink to={"/Utente"} exact activeStyle={{ color: "green" }}>
            Utente
          </NavLink>

          <br />

          <NavLink to={"/Familiares"} exact activeStyle={{ color: "green" }}>
            Familiares
          </NavLink>

          <Route exact path="/Utentes" component={Utentes} />
          <Route exact path="/Utente" component={Utente} />
          <Route exact path="/Familiares" component={Familiares} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
