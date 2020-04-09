import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Index from "./Layout/index";

class App extends Component {
  render() {
    return (
      <div style={{ background: "rgb(66, 133, 244)", height: "100vh" }}>
        <Navbar />
        <Index />
      </div>
    );
  }
}

export default App;
