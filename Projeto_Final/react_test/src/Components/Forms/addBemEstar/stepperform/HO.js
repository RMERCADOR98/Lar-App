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
    const { values, handleChange } = this.props;

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
            <h4>Humor</h4>
          </FormLabel>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="bottom"
              control={
                <Checkbox
                  icon={<SentimentVerySatisfiedIcon />}
                  color="primary"
                  onChange={handleChange("humor")}
                  defaultValue={values.humor}
                />
              }
              label="Alegre"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="bottom"
              control={
                <Checkbox
                  icon={<SentimentSatisfiedIcon />}
                  color="primary"
                  onChange={handleChange("humor")}
                  defaultValue={values.humor}
                />
              }
              label="Normal"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="bottom"
              control={
                <Checkbox
                  icon={<SentimentVeryDissatisfiedIcon />}
                  color="primary"
                  onChange={handleChange("humor")}
                  defaultValue={values.humor}
                />
              }
              label="Triste"
              labelPlacement="bottom"
            />
          </FormGroup>
        </FormControl>
        <br />
        <br />
        <TextareaAutosize
          aria-label="minimum height"
          rowsMin={3}
          Placeholder="Adicone alguma observação"
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
          Continue
        </Button>
      </Fragment>
    );
  }
}

export default HO;
