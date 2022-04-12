import React, { useEffect, useState } from "react";
import { getItems } from "../../service/itemRepository";
import IndexTemplate from "../../templates/main";

const Index = () => {
  const [items, setItems] = useState([]);

  getItems();

  useEffect(() => {
    let today = new Date();
    const itemList = [
      {
        describe: "2",
        endDate: today,
        id: 1632988640408,
        startDate: today,
        title: "1",
        count: 0,
      },
      {
        describe: "2",
        endDate: today,
        id: 1632988640409,
        startDate: today,
        title: "1",
        count: 0,
      },
      {
        describe: "2",
        endDate: today,
        id: 1632988640410,
        startDate: today,
        title: "1",
        count: 0,
      },
    ];
    setItems(itemList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <IndexTemplate items={items} setItems={setItems} />
    </>
  );
};

export default Index;
