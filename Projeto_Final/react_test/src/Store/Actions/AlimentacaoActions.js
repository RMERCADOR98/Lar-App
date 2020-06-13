// import Uid from "../../Components/AlimentacaoUtente/Uid";

export const createAlimentacao = (alimentacao) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const Uid = alimentacao.Id;
    console.log(alimentacao);
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

export const deleteAlimentacao = (alimentacao, Uid) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call
    console.log(alimentacao);
    console.log(Uid);

    const firestore = getFirestore();

    firestore
      .delete({
        collection: "utentes",
        doc: Uid,
        subcollections: [{ collection: "alimentacao", doc: alimentacao }],
      })
      .then(() => {
        dispatch({ type: "DELETE_ALIMENTACAO", alimentacao });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_ALIMENTACAO_ERROR", err });
      });
  };
};
