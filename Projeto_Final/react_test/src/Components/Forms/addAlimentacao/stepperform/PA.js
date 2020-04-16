import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class PA extends Component {
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
        <TextField
          label="Pequeno Almoço"
          onChange={handleChange("pequenoAlmoco")}
          defaultValue={values.pequenoAlmoco}
        />
        <br />
        <TextField
          label="Almoço"
          onChange={handleChange("almoco")}
          defaultValue={values.email}
        />
        <br />

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

export default PA;
