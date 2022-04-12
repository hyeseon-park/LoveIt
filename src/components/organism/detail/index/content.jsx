import React, { memo } from "react";
import styled from "styled-components";
import heartIcon from "../../../../assets/images/common/heart.png";

const ListContent = styled.div`
  width: 100%;
  height: 100vh;
`;

const LoveAnimation = styled.div`
  position: relative;
  width: 105px;
  height: 105px;
  margin: 250px auto;
`;

const LoveWrap = styled.div`
  width: 90px;
  min-width: 90px;
  height: 90px;
  min-height: 90px;
`;

const LoveImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Content = memo(() => {
  const handleHeart = () => {}; //https://www.youtube.com/watch?v=66kWvfnzLu0
  //https://www.cssscript.com/demo/flying-icons-wand/
  return (
    <ListContent>
      <LoveAnimation>
        <LoveWrap>
          <LoveImg src={heartIcon} onClick={() => handleHeart()} />
        </LoveWrap>
        <LoveWrap>
          <LoveImg src={heartIcon} onClick={() => handleHeart()} />
        </LoveWrap>
        <LoveWrap>
          <LoveImg src={heartIcon} onClick={() => handleHeart()} />
        </LoveWrap>
      </LoveAnimation>
    </ListContent>
  );
});

export default Content;
