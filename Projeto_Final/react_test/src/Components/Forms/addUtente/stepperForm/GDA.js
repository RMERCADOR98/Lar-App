import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class GDA extends Component {
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
          label="Grupo Sanguíneo"
          onChange={handleChange("grupoSanguineo")}
          defaultValue={values.grupoSanguineo}
        />
        <br />
        <TextField
          label="Doenças"
          onChange={handleChange("doencas")}
          defaultValue={values.doencas}
        />
        <br />
        <TextField
          label="Alergias"
          onChange={handleChange("alergias")}
          defaultValue={values.alergias}
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
          Continuar
        </Button>
      </Fragment>
    );
  }
}

export default GDA;
