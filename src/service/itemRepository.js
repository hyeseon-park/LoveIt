import { getDatabase, ref, set, child, get } from "firebase/database";
import { database } from "./firebase";

export const getItems = () => {
    const dbRef = ref(database);
    get(child(dbRef, `items`)).then((snapshot) => {
        console.log(snapshot);
      }).catch((error) => {
        console.error(error);
      });
};
