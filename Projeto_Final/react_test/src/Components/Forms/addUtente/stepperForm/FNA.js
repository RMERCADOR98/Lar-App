import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class FNA extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    const styles = {
      button: {
        marginTop: 30,
        padding: 10,
      },
    };
    return (
      <Fragment>
        <TextField
          label="Nome Completo"
          onChange={handleChange("nomeCompleto")}
          defaultValue={values.nomeCompleto}
        />
        <br />
        <TextField
          label="Alcunha"
          onChange={handleChange("alcunha")}
          defaultValue={values.alcunha}
        />
        <br />

        <br />
        <br />

        <Button
          variant="contained"
          color="primary"
          onClick={this.continue}
          className={styles.button}
        >
          Continue
        </Button>
      </Fragment>
    );
  }
}

export default FNA;
