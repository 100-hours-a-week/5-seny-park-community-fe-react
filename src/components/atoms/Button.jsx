import React from "react";
import styled from "styled-components";

const Button = ({ isValid, children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button.attrs((props) => ({
  // 여기서 isValid를 사용해 스타일을 조정하고, 실제 DOM 요소에는 전달하지 않음
}))`
  width: 356px;
  height: 44px;
  background-color: ${(props) =>
    props.isValid ? "#ACA0EB" : "rgba(172, 160, 235, 0.7)"};
  color: white;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    // 그림자 효과
    box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 16px 0px;
  }
`;

export default Button;
