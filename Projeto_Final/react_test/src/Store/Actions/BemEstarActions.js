export const createBemEstar = (bemEstar) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const Uid = bemEstar.Id;
    console.log(Uid);
    console.log(bemEstar);
    firestore
      .collection("utentes")
      .doc(Uid)
      .collection("bemEstar")
      .add({
        ...bemEstar,
        authorFirstName: "Lar",
        authorId: 123,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_BEMESTAR", bemEstar });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_BEMESTAR_ERROR", err });
      });

    dispatch({ type: "CREATE_BEMESTAR", bemEstar: bemEstar });
  };
};

export const deleteBemEstar = (bemEstar, Uid) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call
    console.log(bemEstar);
    console.log(Uid);

    const firestore = getFirestore();

    firestore
      .delete({
        collection: "utentes",
        doc: Uid,
        subcollections: [{ collection: "bemEstar", doc: bemEstar }],
      })
      .then(() => {
        dispatch({ type: "DELETE_BEMESTAR", bemEstar });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_BEMESTAR_ERROR", err });
      });
  };
};
