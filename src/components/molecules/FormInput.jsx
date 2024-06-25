import React from "react";
import styled from "styled-components";
import Input from "../atoms/Input";
import HelperText from "../atoms/HelperText";

// 입력 필드를 위한 별도 컴포넌트
const FormInput = ({
  title,
  type,
  name,
  placeholder,
  value,
  onChange,
  helperText,
}) => {
  return (
    <InputBox>
      <InputTitle>{title}</InputTitle>
      {type === "file" ? <HelperText>{helperText}</HelperText> : null}
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {type !== "file" ? <HelperText>{helperText}</HelperText> : null}
    </InputBox>
  );
};

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 18px;
  box-sizing: border-box;
  gap: 4px;
  margin-bottom: 12px;
`;

const InputTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  height: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #666666;
`;

export default FormInput;
