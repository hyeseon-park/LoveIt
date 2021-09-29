import React, { memo } from "react";
import Header from "../../components/organism/form/add/header";
import Content from "../../components/organism/form/add/content";

const AddTemplate = memo(() => {
  return (
    <>
      <Header />
      <Content />
    </>
  );
});

export default AddTemplate;
