import styled from "styled-components";
import * as C from "../common/colors";
import * as F from "../common/fontSize";

export const Button = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${C.WHITE};
  background-color: ${C.PINK};
  border: 0px;
  padding: 0px 10px;
  border-radius: 4px;
  font-size: ${F.XLARGE};
  font-weight: 600;
  letter-spacing: -0.37px;
  outline: none;
`;

export const FormWrap = styled.div`
  width: 100%;
  padding: 16px 16px;
  align-items: center;
`;

export const FormTop = styled.div`
  width: 100%;
  padding: 16px 0 20px;
`;

export const FormMiddle = styled.div`
  width: 100%;
`;

export const FormTheme = styled.p`
  font-size: ${F.XLARGE};
  font-weight: 800;
  margin-bottom: 2px;
`;

export const FormThemeDesc = styled.p`
  font-size: ${F.SMALL};
  font-weight: 600;
  color: ${C.GREY};
`;

export const FormTitle = styled.input`
  width: 100%;
  height: 55px;
  padding: 14px 16px;
  border: 1px solid ${C.GREY};
  border-radius: 4px;
  margin-bottom: 7px;
  font-size: ${F.MEDIUM};
  &::placeholder {
    color: ${C.GREY};
  }
  &:focus {
    border-color: ${C.BLACK};
    outline: none;
  }
`;

export const FormDate = styled.input`
  width: 100%;
  height: 55px;
  padding: 14px 16px;
  border: 1px solid ${C.GREY};
  border-radius: 4px;
  margin-bottom: 7px;
  font-size: ${F.MEDIUM};
  &::placeholder {
    color: ${C.GREY};
  }
  &:focus {
    border-color: ${C.BLACK};
    outline: none;
  }
`;

export const FormDesc = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 14px 16px;
  border: 1px solid ${C.GREY};
  border-radius: 4px;
  resize: none;
  font-size: ${F.MEDIUM};
  &::placeholder {
    color: ${C.GREY};
  }
  &:focus {
    border-color: ${C.BLACK};
    outline: none;
  }
`;

export const FormButton = styled(Button)``;
