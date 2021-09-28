import React, { memo } from "react";
import styled from "styled-components";
import { WHITE } from "../../../shared/common/colors";
import * as I from "../../../shared/styles/item.style";

const ListContent = styled.div`
  width: 100%;
  background-color: ${WHITE};
`;

const Content = memo(() => {
  return (
    <ListContent>
      <I.ItemWrap>
        <I.ItemLeft>
          <I.ItemTitle>타이틀 1</I.ItemTitle>
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

      <I.ItemWrap>
        <I.ItemLeft>
          <I.ItemTitle>타이틀 2</I.ItemTitle>
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

      <I.ItemWrap>
        <I.ItemLeft>
          <I.ItemTitle>타이틀 3</I.ItemTitle>
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
    </ListContent>
  );
});

export default Content;
