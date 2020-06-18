import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";

class NAP extends Component {
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
          label="Nacionalidade"
          onChange={handleChange("nacionalidade")}
          defaultValue={values.nacionalidade}
        />
        <br />
        <TextField
          label="Altura"
          InputProps={{
            endAdornment: <InputAdornment position="end">Cm</InputAdornment>,
          }}
          onChange={handleChange("altura")}
          defaultValue={values.altura}
        />
        <br />
        <TextField
          label="Peso"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
          onChange={handleChange("peso")}
          defaultValue={values.peso}
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

export default NAP;
