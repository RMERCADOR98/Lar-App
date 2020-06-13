import React, { Component, Fragment } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
class HO extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, handleChangeRadioHumor } = this.props;

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
            value={values.humor}
            onChange={(e) => handleChangeRadioHumor(e)}
          >
            <FormControlLabel
              value="Triste"
              control={<Radio />}
              label="Triste"
            />
            <FormControlLabel
              value="Normal"
              control={<Radio />}
              label="Normal"
            />
            <FormControlLabel
              value="Contente"
              control={<Radio />}
              label="Contente"
            />
          </RadioGroup>
        </FormControl>
        <br />
        <br />
        <TextareaAutosize
          aria-label="minimum height"
          rowsMin={3}
          placeholder="Adicone alguma observação"
          onChange={handleChange("observacoes")}
          defaultValue={values.observacoes}
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

export default HO;
