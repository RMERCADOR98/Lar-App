import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

class MB extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChangeRadio, handleChangeRadioBanho } = this.props;

    const styles = {
      button: {
        marginTop: 30,
        padding: 10,
      },
    };
    return (
      <Fragment>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <h4>Medicação</h4>
          </FormLabel>
          <RadioGroup
            aria-label="position"
            row
            name="medicacao"
            value={values.medicacao}
            onChange={(e) => handleChangeRadio(e)}
          >
            <FormControlLabel
              value="Completa"
              control={<Radio />}
              label="Completa"
            />
            <FormControlLabel
              value="Parcial"
              control={<Radio />}
              label="Parcial"
            />
          </RadioGroup>
        </FormControl>

        <br />

        <FormControl component="fieldset">
          <FormLabel component="legend">
            <h4>Banho</h4>
          </FormLabel>
          <RadioGroup
            aria-label="position"
            row
            name="banho"
            value={values.banho}
            onChange={(e) => handleChangeRadioBanho(e)}
          >
            <FormControlLabel
              value="Completa"
              control={<Radio />}
              label="Completa"
            />
            <FormControlLabel
              value="Parcial"
              control={<Radio />}
              label="Parcial"
            />
          </RadioGroup>
        </FormControl>

        <br />
        <br />

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

export default MB;
