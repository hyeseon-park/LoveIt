import React, { memo } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { dateFormat } from "../../../../utils/dateFormat";
import { WHITE } from "../../../shared/common/colors";
import * as I from "../../../shared/styles/item.style";

const ListContent = styled.div`
  width: 100%;
  background-color: ${WHITE};
`;

const Content = memo(({ items }) => {
  const history = useHistory();
  const goToDetail = (seq) => {
    history.push({
      pathname: "/detail",
      state: { seq },
    });
  };

  return (
    <ListContent>
      {items.map((item) => (
        <I.ItemWrap onClick={() => goToDetail(item.id)}>
          <I.ItemLeft>
            <I.ItemTitle>{item.title}</I.ItemTitle>
            <I.ItemDate>
              {dateFormat(item.startDate)} - {dateFormat(item.endDate)}
            </I.ItemDate>
            <I.ItemDesc>{item.describe}</I.ItemDesc>
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
      ))}
    </ListContent>
  );
});

export default Content;
