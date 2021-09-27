import React, { memo } from "react";
import Content from "../../components/organism/detail/index/content";
import Header from "../../components/organism/detail/index/header";

const IndexTemplate = memo(() => {
  return (
    <>
      <Header />
      <Content />
    </>
  );
});

export default IndexTemplate;
