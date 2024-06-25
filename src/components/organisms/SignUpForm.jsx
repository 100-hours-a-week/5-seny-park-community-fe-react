import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import FormInput from "../molecules/FormInput";

const SignUpForm = ({
  formData,
  formErrors,
  onInputChange,
  onSubmit,
  isValid,
}) => {
  const inputFields = [
    {
      name: "profilePicture",
      type: "file",
      title: "프로필 사진",
      helperText: formErrors.profilePicture,
      onChange: onInputChange,
    },
    {
      name: "email",
      type: "email",
      placeholder: "이메일",
      title: "이메일",
      helperText: formErrors.email,
      onChange: onInputChange,
    },
    {
      name: "nickname",
      type: "text",
      placeholder: "닉네임",
      title: "닉네임",
      helperText: formErrors.nickname,
      onChange: onInputChange,
    },
    {
      name: "password",
      type: "password",
      placeholder: "비밀번호",
      title: "비밀번호",
      helperText: formErrors.password,
      onChange: onInputChange,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "비밀번호 확인",
      title: "비밀번호 확인",
      helperText: formErrors.confirmPassword,
      onChange: onInputChange,
    },
  ];

  return (
    <Form onSubmit={onSubmit}>
      <SignUpTitle>회원가입</SignUpTitle>
      {inputFields.map((field) => (
        <FormInput
          key={field.name}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          value={formData[field.name]}
          onChange={field.onChange}
          title={field.title}
          helperText={field.helperText}
        />
      ))}
      <Button type="submit" isValid={isValid}>
        회원가입
      </Button>
      <SignUpLink to="/">로그인하러 가기</SignUpLink>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 392px;
  padding: 41px 0;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 16px 0px;
  box-sizing: border-box;
`;

const SignUpTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

const SignUpLink = styled(Link)`
  height: 0px;
  padding: 25px;
  box-sizing: border-box;
  font-size: 13px;
  color: #666666;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default SignUpForm;
