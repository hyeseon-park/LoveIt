import React, { memo } from "react";
import styled from "styled-components";
import { PINK } from "../../../shared/common/colors";

const ListContent = styled.div`
  width: 100%;
  background-color: ${PINK};
`;

const Content = memo(() => {
  return <ListContent>Detail Content</ListContent>;
});

export default Content;
