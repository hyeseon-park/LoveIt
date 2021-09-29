import React, { memo } from "react";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
`;

const Header = memo(() => {
  return (
    <Top>
      <div>뒤로</div>
    </Top>
  );
});

export default Header;
