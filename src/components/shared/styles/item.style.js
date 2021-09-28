import styled from "styled-components";
import * as C from "../common/colors";
import * as F from "../common/fontSize";

export const ItemWrap = styled.div`
  padding: 12px 0;
`;

export const ItemLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  background-color: ${C.PINK};
  &.center {
    align-items: center;
  }
`;

export const ItemRight = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  background-color: ${C.RED};
  &.center {
    align-items: center;
  }
`;

export const ItemTitle = styled.p`
  display: -webkit-box;
  overflow: hidden;
  width: 100%;
  height: auto;
  margin-bottom: 6px;
  font-size: ${F.LARGE};
  color: ${C.BLACK};
  line-height: 20px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
`;

export const ItemDesc = styled.p`
  position: absolute;
  left: 0;
  bottom: 7px;
  font-size: ${F.MEDIUM};
  color: ${C.BLACK};
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.43px;
`;

export const ItemDate = styled.p`
  position: absolute;
  left: 0;
  bottom: 7px;
  font-size: ${F.MEDIUM};
  color: ${C.BLACK};
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.43px;
`;

export const ItemLike = styled.div`
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

export const LikePlus = styled.div``;

export const LikeMinus = styled.div``;
