import {
  query,
  orderBy,
  where,
  collection,
  getDocs,
} from "@firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import db from "./firebaseConfig";

export const firestoreFetch = async (idCategory) => {
  let q;
  if (idCategory) {
    q = query(collection(db, "items"), where("idCategory", "==", idCategory));
  } else {
    q = query(collection(db, "items"), orderBy("name"));
  }
  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
  return dataFromFirestore;
};

export const firestoreFetchOne = async (idItem) => {
  const docRef = doc(db, "items", idItem);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: idItem,
      ...docSnap.data(),
    };
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};
