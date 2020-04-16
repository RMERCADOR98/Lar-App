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
      values: { nomeCompleto, alcunha, nascimento, ocupation, city, bio },
    } = this.props;

    const styles = {
      button: {
        margin: 15,
      },
    };

    return (
      <Fragment>
        <List>
          <ListItemText primary="Nome Completo" secondary={nomeCompleto} />
          <ListItemText primary="Alcunha" secondary={alcunha} />
          <ListItemText primary="Data de Nascimento" secondary={nascimento} />
          <ListItemText primary="ocupation" secondary={ocupation} />
          <ListItemText primary="city" secondary={city} />
          <ListItemText primary="bio" secondary={bio} />
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
          onClick={this.continue}
          className={styles.button}
        >
          Continue
        </Button>
      </Fragment>
    );
  }
}

export default Confirm;