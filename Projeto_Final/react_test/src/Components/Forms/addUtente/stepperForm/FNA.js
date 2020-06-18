import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import FotoUtenteUpload from "./FotoUtenteUpload";

class FNA extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {
      values,
      handleChange,
      handleChangeFoto,
      handleUpload,
      handleSubmitFoto,
      onChangeComp,
    } = this.props;
    console.log(values.url);

    const styles = {
      button: {
        marginTop: 30,
        padding: 10,
      },
    };
    return (
      <Fragment>
        <FotoUtenteUpload
          values={values}
          handleUpload={handleUpload}
          onChangeComp={onChangeComp}
        />
        {values.url}
        <TextField
          label="Nome Completo"
          onChange={handleChange("nomeCompleto")}
          defaultValue={values.nomeCompleto}
        />

        <br />
        <TextField
          label="Alcunha"
          onChange={handleChange("alcunha")}
          defaultValue={values.alcunha}
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
          Continuar
        </Button>
      </Fragment>
    );
  }
}

export default FNA;
