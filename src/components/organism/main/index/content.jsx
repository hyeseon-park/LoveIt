import React, { memo } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { WHITE } from "../../../shared/common/colors";
import * as I from "../../../shared/styles/item.style";

const ListContent = styled.div`
  width: 100%;
  background-color: ${WHITE};
`;

const Content = memo(() => {
  const history = useHistory();
  const goToDetail = (seq) => {
    history.push({
      pathname: "/detail",
      state: { seq },
    });
  };

  return (
    <ListContent>
      <I.ItemWrap onClick={goToDetail(1)}>
        <I.ItemLeft>
          <I.ItemTitle>타이틀 타이틀</I.ItemTitle>
          <I.ItemDate>2021.09.28 - 2021.09.28</I.ItemDate>
          <I.ItemDesc>설명 설명 설명 설명 설명 설명</I.ItemDesc>
        </I.ItemLeft>
        <I.ItemRight>
          <I.ItemLove>
            <I.Img></I.Img>
          </I.ItemLove>
          <I.LoveControl>
            <I.LovePlus>+</I.LovePlus>
            <I.LoveMinus>-</I.LoveMinus>
          </I.LoveControl>
        </I.ItemRight>
      </I.ItemWrap>

      <I.ItemWrap onClick={goToDetail(1)}>
        <I.ItemLeft>
          <I.ItemTitle>타이틀 타이틀</I.ItemTitle>
          <I.ItemDate>2021.09.28 - 2021.09.28</I.ItemDate>
          <I.ItemDesc>설명 설명 설명 설명 설명 설명</I.ItemDesc>
        </I.ItemLeft>
        <I.ItemRight>
          <I.ItemLove>
            <I.Img></I.Img>
          </I.ItemLove>
          <I.LoveControl>
            <I.LovePlus>+</I.LovePlus>
            <I.LoveMinus>-</I.LoveMinus>
          </I.LoveControl>
        </I.ItemRight>
      </I.ItemWrap>

      <I.ItemWrap onClick={goToDetail(1)}>
        <I.ItemLeft>
          <I.ItemTitle>타이틀 타이틀</I.ItemTitle>
          <I.ItemDate>2021.09.28 - 2021.09.28</I.ItemDate>
          <I.ItemDesc>설명 설명 설명 설명 설명 설명</I.ItemDesc>
        </I.ItemLeft>
        <I.ItemRight>
          <I.ItemLove>
            <I.Img></I.Img>
          </I.ItemLove>
          <I.LoveControl>
            <I.LovePlus>+</I.LovePlus>
            <I.LoveMinus>-</I.LoveMinus>
          </I.LoveControl>
        </I.ItemRight>
      </I.ItemWrap>
    </ListContent>
  );
});

export default Content;
