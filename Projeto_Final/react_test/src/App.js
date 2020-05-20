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

import SignIn from "./Layout/Auth/SignIn";
import SignUp from "./Layout/Auth/SignUp";

import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "" };
  }

  changeColor = (color) => {
    this.setState({ color });
  };
  render() {
    return (
      <div style={{ background: this.state.color }}>
        <Router>
          <ButtonAppBar>
            {/* <NavLink
              to={"/"}
              exact
              activeStyle={{ color: "green" }}
              onClick={() => this.changeColor("#fff")}
            >
              Utentes
            </NavLink>
            <br /> */}

            {/* <NavLink
              to={"/Utente/:id"}
              exact
              activeStyle={{ color: "green" }}
              onClick={() => this.changeColor("rgb(66, 133, 244)")}
            >
              Utente
            </NavLink> */}

            {/* <br />
            <NavLink to={"/Alimentação"} exact activeStyle={{ color: "green" }}>
              Alimentação
            </NavLink>
            <br /> */}

            {/* <NavLink to={"/Saúde"} exact activeStyle={{ color: "green" }}>
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

            <br /> */}

            <Switch>
              <Route exact path="/" component={Utentes} />
              <Route exact path="/Utente/:id" component={PerfilUtente} />
              <Route exact path="/Alimentação" component={Alimentacao} />
              <Route exact path="/Saúde" component={Saude} />
              <Route exact path="/Informações" component={Info} />
              <Route exact path="/Bem-Estar" component={BemEstar} />
              <Route exact path="/Familiares" component={Familiares} />

              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </ButtonAppBar>
        </Router>
      </div>
    );
  }
}

export default App;
