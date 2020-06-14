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
        foto,
        url,
        nomeCompleto,
        alcunha,
        nascimento,
        sexo,
        estadoCivil,
        nacionalidade,
        altura,
        peso,
        nCartaoCidade,
        nContribuinte,
        nSegurancaSocial,
        grupoSanguineo,
        doencas,
        alergias,
        centroSaude,
        contactoCentroSaude,
        medico,
      },
    } = this.props;

    console.log(this.props.values.url);

    const styles = {
      button: {
        margin: 15,
      },
    };

    return (
      <Fragment>
        <List>
          <ListItemText primary="Foto" secondary={foto} />
          <ListItemText primary="Url" secondary={url} />
          <ListItemText primary="Nome Completo" secondary={nomeCompleto} />
          <ListItemText primary="Alcunha" secondary={alcunha} />
          <ListItemText
            primary="Data de Nascimento"
            secondary={nascimento.toLocaleDateString("pt-PT")}
          />
          <ListItemText primary="Sexo" secondary={sexo} />
          <ListItemText primary="Estado civil" secondary={estadoCivil} />
          <ListItemText primary="Nacionalidade" secondary={nacionalidade} />
          <ListItemText primary="Altura" secondary={altura + " cm"} />
          <ListItemText primary="Peso" secondary={peso + " kg"} />
          <ListItemText primary="Nº Cartão Cidadão" secondary={nCartaoCidade} />
          <ListItemText primary="Nº Contribuinte" secondary={nContribuinte} />
          <ListItemText
            primary="Nº Segurança Social"
            secondary={nSegurancaSocial}
          />
          <ListItemText primary="Grupo Sanguíneo" secondary={grupoSanguineo} />
          <ListItemText primary="Doenças" secondary={doencas} />
          <ListItemText primary="Alergias" secondary={alergias} />
          <ListItemText primary="Centro de Saúde" secondary={centroSaude} />
          <ListItemText
            primary="Contacto Centro Saude"
            secondary={contactoCentroSaude}
          />
          <ListItemText primary="Médico" secondary={medico} />
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
