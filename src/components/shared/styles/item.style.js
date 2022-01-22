import styled from "styled-components";
import * as C from "../common/colors";
import * as F from "../common/fontSize";
import { motion } from "framer-motion";

export const ItemWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 16px;
  border-bottom: 1px solid ${C.BEIGE};
  align-items: center;

  @media (max-width: 360px) {
    flex-direction: column;
  }
`;

export const ItemLeft = styled.div`
  flex-basis: 70%;
`;

export const ItemRight = styled.div`
  display: flex;
  flex-basis: 30%;
  justify-content: end;
`;

export const ItemTitle = styled.p`
  font-size: ${F.LARGE};
  font-weight: 800;
  color: ${C.BLACK};
  line-height: 20px;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const ItemDate = styled.p`
  font-size: ${F.SMALL};
  font-weight: 600;
  color: ${C.GREY};
  line-height: 20px;
  text-overflow: ellipsis;
  word-break: break-all;
  padding: 5px 0;
`;

export const ItemDesc = styled.p`
  font-size: ${F.MEDIUM};
  font-weight: 400;
  color: ${C.BLACK};
  line-height: 20px;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const ItemLove = styled(motion.div)`
  width: 90px;
  min-width: 90px;
  height: 90px;
  min-height: 90px;
`;


export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const LoveControl = styled.div`
  padding: 0 0 0 16px;
`;

export const LovePlus = styled.button`
  text-align: center;
  display: block;
  width: 40px;
  height: 40px;
  border: 0px;
  border-radius: 24px;
  background-color: ${C.PINK};
  margin-bottom: 5px;
`;

export const LoveMinus = styled.button`
  text-align: center;
  display: block;
  width: 40px;
  height: 40px;
  border: 0px;
  border-radius: 24px;
  background-color: ${C.PINK};
`;
