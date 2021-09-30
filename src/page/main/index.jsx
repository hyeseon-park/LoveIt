import React, { useEffect, useState } from "react";
import firebaseApp from "../../service/firebase";
import { getItems } from "../../service/itemRepository";
import IndexTemplate from "../../templates/main";

const Index = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemList = getItems();
    setItems(itemList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseApp]);

  return (
    <>
      <IndexTemplate items={items} />
    </>
  );
};

export default Index;
