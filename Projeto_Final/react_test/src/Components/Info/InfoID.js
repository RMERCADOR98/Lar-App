import React, { Component } from "react";

export default class InfoID extends Component {
  render() {
    const id = this.props.Uid.toString();
    console.log(id);
    return <p>{id}</p>;
  }
}
