import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class CMA extends Component {
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
          label="Contacto"
          onChange={handleChange("contacto")}
          defaultValue={values.contacto}
        />
        <br />
        <TextField
          label="Morada"
          onChange={handleChange("morada")}
          defaultValue={values.morada}
        />
        <br />
        <TextField
          label="Afiliação"
          onChange={handleChange("afiliacao")}
          defaultValue={values.afiliacao}
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

export default CMA;
