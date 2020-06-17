import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

class AG extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {
      values,
      handleChangeRadioAlimentacao,
      handleChangeRadioGostou,
    } = this.props;

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
            <h4>Alimentação</h4>
          </FormLabel>
          <RadioGroup
            aria-label="position"
            row
            name="alimentacao"
            value={values.alimentacao}
            onChange={(e) => handleChangeRadioAlimentacao(e)}
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
            <h4>Gostou</h4>
          </FormLabel>
          <RadioGroup
            aria-label="position"
            row
            name="gostou"
            value={values.gostou}
            onChange={(e) => handleChangeRadioGostou(e)}
          >
            <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
            <FormControlLabel value="Não" control={<Radio />} label="Não" />
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

export default AG;
