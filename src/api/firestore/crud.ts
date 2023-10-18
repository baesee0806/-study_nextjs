import { firestore } from "../../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export interface createProps {
  title: string;
  content: string;
  createdAt: Date;
  category: string;
}
interface readProps {
  catagori: string;
}
interface updateProps {}
interface removeProps {
  catagori: string;
  docId: string;
}

export const create = async (category: string, data: createProps) => {
  const query = collection(firestore, category);

  await addDoc(query, data).then((docRef) => {
    console.log(1);

    updateDoc(docRef, { id: docRef.id });
  });
};
export const read = async ({ catagori }: readProps) => {
  const query = collection(firestore, catagori);
  const data = await getDocs(query);
};

export const update = () => {};

export const remove = async ({ catagori, docId }: removeProps) => {
  const query = doc(firestore, catagori, docId);
  const deleteData = await deleteDoc(query);
};
