import React, { memo } from "react";
import styled from "styled-components";
import { BLACK, WHITE } from "../../../shared/common/colors";
import { MEDIUM } from "../../../shared/common/fontSize";

const Top = styled.div`
  width: 100%;
  background-color: ${WHITE};
`;

const Title = styled.p`
  font-size: ${MEDIUM};
  color: ${BLACK};
  line-height: 24px;
`;

const Header = memo(() => {
  return (
    <Top>
      <Title>LOVE IT</Title>
    </Top>
  );
});

export default Header;
