import React, { memo } from "react";
import Content from "../../components/organism/main/index/content";
import Header from "../../components/organism/main/index/header";

const IndexTemplate = memo(({ items }) => {
  return (
    <>
      <Header />
      <Content items={items} />
    </>
  );
});

export default IndexTemplate;
