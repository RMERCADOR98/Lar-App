export const createAlimentacao = (alimentacao) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const Uid = alimentacao.Id;
    console.log(Uid);
    firestore
      .collection("utentes")
      .doc(Uid)
      .collection("alimentacao")
      .add({
        ...alimentacao,
        authorFirstName: "Lar",
        authorId: 123,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_ALIMENTACAO", alimentacao });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_ALIMENTACAO_ERROR", err });
      });

    dispatch({ type: "CREATE_ALIMENTACAO", alimentacao: alimentacao });
  };
};

export const deleteAlimentacao = (alimentoId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call
    console.log(alimentoId);
    // console.log(dispatch);

    const firestore = getFirestore();

    firestore
      .delete({
        collection: "utentes",
        doc: "X1TxGG8eFV2jgUJUhN7Y",
        subcollections: [{ collection: "alimentacao", doc: alimentoId }],
      })
      .then(() => {
        dispatch({ type: "DELETE_ALIMENTACAO", alimentoId });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_ALIMENTACAO_ERROR", err });
      });
  };
};
