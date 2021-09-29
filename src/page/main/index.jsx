import React, { useState } from "react";
import IndexTemplate from "../../templates/main";

const Index = () => {
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState([
    {
      id: "1",
      title: "사과 먹기",
      startDate: new Date(),
      endDate: new Date(),
      describe: "하루에 한 번 사과를 먹는다.",
    },
    {
      id: "2",
      title: "달리기",
      startDate: new Date(),
      endDate: new Date(),
      describe: "이틀에 한 번 운동장을 달린다.",
    },
    {
      id: "3",
      title: "개발 공부하기",
      startDate: new Date(),
      endDate: new Date(),
      describe: "틈틈이 개발 공부를 한다.",
    },
  ]);

  return (
    <>
      <IndexTemplate items={items} />
    </>
  );
};

export default Index;
