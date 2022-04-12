import React, { memo } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { dateFormat } from "../../../../utils/dateFormat";
import { WHITE } from "../../../shared/common/colors";
import * as I from "../../../shared/styles/item.style";
import heartIcon from "../../../../assets/images/common/heart.png";
import { motion } from "framer-motion";

const ListContent = styled.div`
  width: 100%;
  background-color: ${WHITE};
`;

export const MotionDiv = styled(motion.div)`
  background: black;
  border-radius: 30px;
  width: 100px;
  height: 150px;
`;

const Content = memo(({ items, setItems }) => {
  const history = useHistory();

  const goToDetail = (seq) => {
    history.push({
      pathname: "/detail",
      state: { seq },
    });
  };

  const handleCount = (id, count) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, count: item.count + count } : item
      )
    );
  };

  return (
    <ListContent>
      {items.map((item) => (
        <I.ItemWrap>
          <I.ItemLeft onClick={() => goToDetail()}>
            <I.ItemTitle>{item.title}</I.ItemTitle>
            <I.ItemDate>
              {dateFormat(item.startDate)} - {dateFormat(item.endDate)}
            </I.ItemDate>
            <I.ItemDesc>{item.count}</I.ItemDesc>
          </I.ItemLeft>
          <I.ItemRight>
            <I.ItemLove
              whileTap={{
                scale: [1, 1.4, 1.8, 1.4, 1],
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
              }}
            >
              <I.Img src={heartIcon} />
            </I.ItemLove>
            <I.LoveControl>
              <I.LovePlus
                onClick={(e) => {
                  e.stopPropagation();
                  handleCount(item.id, 1);
                }}
              >
                +
              </I.LovePlus>
              <I.LoveMinus
                onClick={(e) => {
                  e.stopPropagation();
                  handleCount(item.id, -1);
                }}
              >
                -
              </I.LoveMinus>
            </I.LoveControl>
          </I.ItemRight>
        </I.ItemWrap>
      ))}
    </ListContent>
  );
});

export default Content;
