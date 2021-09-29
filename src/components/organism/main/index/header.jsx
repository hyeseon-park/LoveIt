import React, { memo } from "react";
import styled from "styled-components";
import { BEIGE, BLACK, WHITE } from "../../../shared/common/colors";
import { XXLARGE } from "../../../shared/common/fontSize";

const Top = styled.div`
  width: 100%;
  background-color: ${WHITE};
  text-align: center;
  border-bottom: 1px solid ${BEIGE};
`;

const Title = styled.p`
  font-size: ${XXLARGE};
  font-weight: 800;
  line-height: 24px;
  color: ${BLACK};
  padding: 20px 0px;
`;

const Header = memo(() => {
  return (
    <Top>
      <Title>LOVE IT</Title>
    </Top>
  );
});

export default Header;
