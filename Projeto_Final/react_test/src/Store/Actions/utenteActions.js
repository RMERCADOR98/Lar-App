export const createUtente = (utente) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore
      .collection("utentes")
      .add({
        ...utente,
        authorFirstName: "Lar",
        authorId: 123,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_UTENTE", utente });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_UTENTE_ERROR", err });
      });

    dispatch({ type: "CREATE_UTENTE", utente: utente });
  };
};

export const deleteUtente = (utenteId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call
    console.log(utenteId);
    const firestore = getFirestore();

    firestore
      .delete({ collection: "utentes", doc: utenteId })
      .then(() => {
        dispatch({ type: "DELETE_UTENTE", utenteId });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_UTENTE_ERROR", err });
      });
  };
};

export const updateUtente = (utente) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database

    const firestore = getFirestore();

    const Uid = utente.Id;
    console.log(Uid);

    firestore
      .collection("utentes")
      .doc(Uid)
      .update({
        ...utente,
      })
      .then(() => {
        dispatch({ type: "UPDATE_UTENTE", utente });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_UTENTE_ERROR", err });
      });

    dispatch({ type: "UPDATE_UTENTE", utente: utente });
  };
};
