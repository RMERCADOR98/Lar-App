import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class NNN extends Component {
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
        marginTop: 30,
        padding: 10,
      },
    };
    return (
      <Fragment>
        <TextField
          label="Nº cartão de cidadão"
          onChange={handleChange("nCartaoCidadao")}
          defaultValue={values.nCartaoCidadao}
        />
        <br />
        <TextField
          label="Nº contribuinte"
          onChange={handleChange("nContribuinte")}
          defaultValue={values.nContribuinte}
        />
        <br />
        <TextField
          label="Nº segurança social"
          onChange={handleChange("nSegurancaSocial")}
          defaultValue={values.nSegurançaSocial}
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
          Continue
        </Button>
      </Fragment>
    );
  }
}

export default NNN;
