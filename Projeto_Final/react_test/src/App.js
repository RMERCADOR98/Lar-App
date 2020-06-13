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
    this.state = { color: "lightblue" };
  }

  changeColor = (color) => {
    this.setState({ color });
  };
  render() {
    return (
      <div style={{ background: this.state.color, height: "100vh" }}>
        <Router>
          <ButtonAppBar>
            <Switch>
              <Route exact path="/" component={Utentes} />
              <Route exact path="/Utente/:id" component={PerfilUtente} />
              <Route exact path="/Alimentação/:id" component={Alimentacao} />
              <Route exact path="/Saúde/:id" component={Saude} />
              <Route exact path="/Informações/:id" component={Info} />
              <Route exact path="/Bem-Estar/:id" component={BemEstar} />
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
