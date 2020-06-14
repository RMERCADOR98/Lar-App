import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import firebase from "../../../../Config/fbConfig";

class FotoUtenteUpload extends Component {
  state = {
    image: null,
    url: "",
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  sendData = () => {
    this.props.onChangeComp(this.state.url);
  };

  handleUpload = () => {
    const { image } = this.state;
    console.log(firebase);
    const uploadTask = firebase
      .storage()
      .ref(`images/${image.name}`)
      .put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("snapshot");
      },
      (error) => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url: url });
            console.log({ url });
            console.log(this.state.url);
          });
      }
    );
  };

  handleChangeFoto = (e) => {
    if (e.target.files[0]) {
      this.setState({
        image: e.target.files[0],
      });
    }
    console.log(e.target.files[0]);
  };

  render() {
    console.log(this.props);
    console.log(this.sendData);
    const link = this.state.url;
    return (
      <div>
        <div className="upload data">
          <input type="file" onChange={this.handleChangeFoto} name="image" />
          <img src={this.state.url} height="100" width="100" />
        </div>
        <div className="botoes">
          <button onClick={this.handleUpload}>Upload Image</button>
          {/* <span onclick={this.sendData}>{link}</span> */}
          <button onClick={this.sendData}>Registar</button>
        </div>
        <div>{this.state.url}</div>
      </div>
    );
  }
}

export default FotoUtenteUpload;
