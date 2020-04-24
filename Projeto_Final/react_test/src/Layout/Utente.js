import React from "react";

import PerfilUtenteCard from "../Components/card";
import FormDialog from "../Components/Forms/addUtente/addUtente";
import FormDialogaddFamiliar from "../Components/Forms/addFamiliar/addFamiliar";
import FormDialogaddAlimentacao from "../Components/Forms/addAlimentacao/addAlimentacao";
import FormDialogaddBemEstar from "../Components/Forms/addBemEstar/addBemEstar";
import { CssBaseline } from "@material-ui/core";

const Utente = () => {
  return (
    <div style={{ backgroundColor: "rgb(66, 133, 244)" }}>
      <CssBaseline />
      <PerfilUtenteCard />
      <FormDialog />
      <FormDialogaddFamiliar />
      <FormDialogaddAlimentacao />
      <FormDialogaddBemEstar />
    </div>
  );
};

export default Utente;
