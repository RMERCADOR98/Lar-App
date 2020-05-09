import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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
    const { values, handleChange, handleDateChange } = this.props;

    const styles = {
      button: {
        margin: 15,
      },
    };

    return (
      <Fragment>
        <br />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            type="text"
            label="Data de Nascimento"
            format="dd/MM/yyyy"
            value={values.nascimento}
            onChange={(date) => handleDateChange(date)}
          />
        </MuiPickersUtilsProvider>
        <br />
        <TextField
          label="Sexo"
          onChange={handleChange("sexo")}
          defaultValue={values.sexo}
        />
        <br />
        <TextField
          label="Estado civil"
          floatingLabelText="estadoCivil"
          onChange={handleChange("estadoCivil")}
          defaultValue={values.estadoCivil}
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
