import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MaterialUIPickers from "./calendárioNascimento";

class NSE extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    const styles = {
      button: {
        margin: 15,
      },
    };
    return (
      <Fragment>
        <br />
        <MaterialUIPickers onChange={handleChange("nascimento")} />
        <TextField
          label="Sexo"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br />
        <TextField
          label="Estado civil"
          floatingLabelText="Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={this.back}
          className={styles.button}
        >
          Voltar
        </Button>
        &nbsp;
        <Button
          variant="contained"
          color="primary"
          onClick={this.continue}
          className={styles.button}
        >
          Avançar
        </Button>
      </Fragment>
    );
  }
}

export default NSE;
