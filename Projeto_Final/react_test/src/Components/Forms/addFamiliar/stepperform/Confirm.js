import React, { Component, Fragment } from "react";
import { List, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";

class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    //Process Form -> Seria neste sitio onde iriamos processar as infos do form para a bd
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        nomeCompleto,
        email,
        contacto,
        morada,
        afiliacao,
        nCartaoCidadao,
        nContribuinte,
        nSegurancaSocial,
      },
    } = this.props;

    console.log(this.props);

    const styles = {
      button: {
        margin: 15,
      },
    };

    return (
      <Fragment>
        <List>
          <ListItemText primary="Nome Completo" secondary={nomeCompleto} />
          <ListItemText primary="Alcunha" secondary={email} />
          <ListItemText primary="Data de Nascimento" secondary={contacto} />
          <ListItemText primary="ocupation" secondary={morada} />
          <ListItemText primary="city" secondary={afiliacao} />
          <ListItemText primary="bio" secondary={nCartaoCidadao} />
          <ListItemText primary="bio" secondary={nContribuinte} />
          <ListItemText primary="bio" secondary={nSegurancaSocial} />
        </List>
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
          onClick={this.props.handleSubmit}
          className={styles.button}
        >
          Confirmar
        </Button>
      </Fragment>
    );
  }
}

export default Confirm;
