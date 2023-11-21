import { db } from "../_utils/firebase";
import {collection,getDocs,addDoc,query} from "firebase/firestore";

export async function getItems(userId) {
  const itemsRef = collection(db, 'users', userId, 'items');
  const q = query(itemsRef);
  const querySnapshot = await getDocs(q);
  const itemsList = querySnapshot.docs.map(doc => {
    return {id: doc.id, ...doc.data()};
  });
  return itemsList;
}

export async function addItem(userId, item) {
  const itemsRef = collection(db, 'users', userId, 'items');
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}