import React, { memo } from "react";
import styled from "styled-components";
import Content from "../../components/organism/main/index/content";
import Header from "../../components/organism/main/index/header";
import { BEIGE } from "../../components/shared/common/colors";

const Container = styled.div`
  background-color: ${BEIGE};
  height: auto;
  min-height: 100vh;
`;

const IndexTemplate = memo(({ items, setItems }) => {
  return (
    <>
      <Container>
        <Header />
        <Content items={items} setItems={setItems} />
      </Container>
    </>
  );
});

export default IndexTemplate;
