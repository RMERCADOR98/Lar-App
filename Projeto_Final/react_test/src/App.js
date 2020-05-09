import React, { Component } from "react";
import ButtonAppBar from "./Components/Navbar";
import Familiares from "./Layout/Familiares";
import Utentes from "./Layout/Utentes";
import Alimentacao from "./Layout/Alimentacao";
import Saude from "./Layout/Saude";
import Info from "./Layout/Info";
import PerfilUtente from "./Components/PerfilUtente";
import BemEstar from "./Layout/BemEstar";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <ButtonAppBar>
            <NavLink to={"/"} exact activeStyle={{ color: "green" }}>
              Utentes
            </NavLink>
            <br />

            <NavLink to={"/Utente"} exact activeStyle={{ color: "green" }}>
              Utente
            </NavLink>

            <br />
            <NavLink to={"/Alimentação"} exact activeStyle={{ color: "green" }}>
              Alimentação
            </NavLink>
            <br />

            <NavLink to={"/Saúde"} exact activeStyle={{ color: "green" }}>
              Saúde
            </NavLink>
            <br />
            <NavLink to={"/Informações"} exact activeStyle={{ color: "green" }}>
              Info
            </NavLink>
            <br />
            <NavLink to={"/Bem-Estar"} exact activeStyle={{ color: "green" }}>
              Bem Estar
            </NavLink>
            <br />

            <NavLink to={"/Familiares"} exact activeStyle={{ color: "green" }}>
              Familiares
            </NavLink>

            <br />

            <Switch>
              <Route exact path="/" component={Utentes} />
              <Route exact path="/Utente/:id" component={PerfilUtente} />
              <Route exact path="/Alimentação" component={Alimentacao} />
              <Route exact path="/Saúde" component={Saude} />
              <Route exact path="/Informações" component={Info} />
              <Route exact path="/Bem-Estar" component={BemEstar} />
              <Route exact path="/Familiares" component={Familiares} />
            </Switch>
          </ButtonAppBar>
        </Router>
      </div>
    );
  }
}

export default App;
