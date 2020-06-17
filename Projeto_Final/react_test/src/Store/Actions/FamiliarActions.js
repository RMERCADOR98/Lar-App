export const createFamiliar = (familiar) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const Uid = familiar.Id;
    console.log(familiar);
    console.log(Uid);
    firestore
      .collection("utentes")
      .doc(Uid)
      .collection("familiar")
      .add({
        ...familiar,
        authorFirstName: "Lar",
        authorId: 123,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_FAMILIAR", familiar });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_FAMILIAR_ERROR", err });
      });

    dispatch({ type: "CREATE_FAMILIAR", familiar: familiar });
  };
};

export const deleteFamiliar = (familiar, Uid) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call
    console.log(familiar);
    console.log(Uid);

    const firestore = getFirestore();

    firestore
      .delete({
        collection: "utentes",
        doc: Uid,
        subcollections: [{ collection: "familiar", doc: familiar }],
      })
      .then(() => {
        dispatch({ type: "DELETE_FAMILIAR", familiar });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_FAMILIAR_ERROR", err });
      });
  };
};
