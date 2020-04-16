import React from "react";

const PerfilUtente = ({ utentes, deleteUtente }) => {
  const listaUtentes = utentes.map((utente) => {
    return (
      <div className="utentes" key={utente.id}>
        <div>Nome: {utente.nome}</div>
        <div>Idade: {utente.idade}</div>
        <div>Estado civil: {utente.eCivil}</div>
        <button
          onClick={() => {
            deleteUtente(utente.id);
          }}
        >
          Apagar Utente
        </button>
        <br />
        <br />
        <br />
      </div>
    );
  });
  return <div className="lista-utente">{listaUtentes}</div>;
};

export default PerfilUtente;
