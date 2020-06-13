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
      values: { medicacao, banho, humor, observacoes },
    } = this.props;

    const styles = {
      button: {
        margin: 15,
      },
    };

    return (
      <Fragment>
        <List>
          <ListItemText primary="Medicação" secondary={medicacao} />
          <ListItemText primary="Banho" secondary={banho} />
          <ListItemText primary="Humor" secondary={humor} />
          <ListItemText primary="Observações" secondary={observacoes} />
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
