import React, { memo } from "react";
import * as G from "../styles/form.style";

const FormGuide = memo(() => {
  return (
    <>
      <G.FormWrap>
        <G.FormTop>
          <G.FormTheme>습관 추가</G.FormTheme>
          <G.FormThemeDesc>
            습관으로 만들고 싶은 행동을 작성해주세요.
          </G.FormThemeDesc>
        </G.FormTop>
        <G.FormMiddle>
          <G.FormTitle placeholder={"제목을 입력해주세요."}></G.FormTitle>
          <G.FormDate placeholder={"날짜를 입력해주세요."}></G.FormDate>
          <G.FormDesc placeholder={"자세한 설명을 입력해주세요."}></G.FormDesc>
        </G.FormMiddle>
        <G.FormButton>만들기</G.FormButton>
      </G.FormWrap>
    </>
  );
});

export default FormGuide;
