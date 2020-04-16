import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";

import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

class MB extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
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
            <h4>Medicação</h4>
          </FormLabel>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="bottom"
              control={
                <Checkbox
                  color="primary"
                  onChange={handleChange("medicacao")}
                  defaultValue={values.medicacao}
                />
              }
              label="Completa"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="bottom"
              control={
                <Checkbox
                  color="primary"
                  onChange={handleChange("medicacao")}
                  defaultValue={values.medicacao}
                />
              }
              label="Parcial"
              labelPlacement="bottom"
            />
          </FormGroup>
        </FormControl>

        <br />

        <FormControl component="fieldset">
          <FormLabel component="legend">
            <h4>Banho</h4>
          </FormLabel>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="bottom"
              control={
                <Checkbox
                  color="primary"
                  onChange={handleChange("banho")}
                  defaultValue={values.banho}
                />
              }
              label="Tomou"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="bottom"
              control={
                <Checkbox
                  color="primary"
                  onChange={handleChange("banho")}
                  defaultValue={values.banho}
                />
              }
              label="Não Tomou"
              labelPlacement="bottom"
            />
          </FormGroup>
        </FormControl>
        <br />
        <br />

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

export default MB;
