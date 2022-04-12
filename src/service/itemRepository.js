import { getDatabase, ref, set, child, get } from "firebase/database";

export const addItem = (item) => {
  const db = getDatabase();
  set(ref(db, `items/${item.id}`), item);
};

export const getItems = async () => {
  const dbRef = ref(getDatabase());
  await get(child(dbRef, `items`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
      } else {
        return "No data available";
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
