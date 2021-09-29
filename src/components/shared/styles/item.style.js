import styled from "styled-components";
import * as C from "../common/colors";
import * as F from "../common/fontSize";

export const ItemWrap = styled.div`
  padding: 12px 0;
  display: flex;
  @media (max-width: 360px) {
    flex-direction: column;
  }
`;

export const ItemLeft = styled.div`
  flex-basis: 70%;
  background-color: ${C.PINK};
`;

export const ItemRight = styled.div`
  flex-basis: 30%;
  background-color: ${C.RED};
  display: flex;
`;

export const ItemTitle = styled.p`
  font-size: ${F.LARGE};
  color: ${C.BLACK};
  line-height: 20px;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const ItemDate = styled.p`
  font-size: ${F.SMALL};
  color: ${C.BLACK};
  line-height: 20px;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const ItemDesc = styled.p`
  font-size: ${F.MEDIUM};
  color: ${C.BLACK};
  line-height: 20px;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const ItemLove = styled.div`
  overflow: hidden;
  width: 90px;
  min-width: 90px;
  height: 90px;
  min-height: 90px;
  border: 1px solid #f1f3f5;
  border-radius: 4px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LoveControl = styled.div``;

export const LovePlus = styled.div``;

export const LoveMinus = styled.div``;
