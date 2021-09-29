import React, { memo, useRef } from "react";
import * as G from "../../../shared/styles/form.style";

const Content = memo(() => {
  const formRef = useRef();
  const titleRef = useRef();
  const dateRef = useRef();
  const descRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const habit = {
      id: Date.now(),
      title: titleRef.current.value || "",
      startDate: new Date() || "",
      endDate: new Date() || "",
      describe: descRef.current.value || "",
    };
    formRef.current.reset();
  };

  return (
    <G.FormWrap>
      <G.FormTop>
        <G.FormTheme>습관 추가</G.FormTheme>
        <G.FormThemeDesc>
          습관으로 만들고 싶은 행동을 작성해주세요.
        </G.FormThemeDesc>
      </G.FormTop>
      <G.FormMiddle>
        <form ref={titleRef}>
          <G.FormTitle
            ref={titleRef}
            type="text"
            name="title"
            placeholder={"제목을 입력해주세요."}
          />
          <G.FormDate
            ref={dateRef}
            type="text"
            name="date"
            placeholder={"날짜를 입력해주세요."}
          />
          <G.FormDesc
            ref={descRef}
            type="text"
            name="desc"
            placeholder={"자세한 설명을 입력해주세요."}
          />
        </form>
      </G.FormMiddle>
      <G.FormButton onClick={() => handleSubmit}>추가하기</G.FormButton>
    </G.FormWrap>
  );
});

export default Content;
