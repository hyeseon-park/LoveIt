import React, { memo } from "react";
import * as I from "../styles/item.style";

const ItemGuide = memo(() => {
  return (
    <>
      <I.ItemWrap>
        <I.ItemLeft>
          <I.ItemTitle>타이틀 타이틀</I.ItemTitle>
          <I.ItemDesc>설명 설명 설명 설명 설명 설명</I.ItemDesc>
          <I.ItemDate>2021.09.28 - 2021.09.28</I.ItemDate>
        </I.ItemLeft>
        <I.ItemRight>
          <I.ItemLove>
            <I.Img></I.Img>
          </I.ItemLove>
          <I.LovePlus>+</I.LovePlus>
          <I.LoveMinus>-</I.LoveMinus>
        </I.ItemRight>
      </I.ItemWrap>
    </>
  );
});

export default ItemGuide;
