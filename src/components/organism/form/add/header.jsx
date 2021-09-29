import React, { memo } from "react";
import styled from "styled-components";
import { RED } from "../../../shared/common/colors";

const Top = styled.div`
  width: 100%;
  background-color: ${RED};
`;

const Header = memo(() => {
  return <Top>Form Header</Top>;
});

export default Header;
