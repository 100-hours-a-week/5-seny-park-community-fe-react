import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import FormInput from "../molecules/FormInput";

const SignInForm = ({
  email,
  password,
  emailError,
  passwordError,
  handleEmailChange,
  handlePasswordChange,
  handleSubmit,
  isValid,
}) => {
  return (
    <Form noValidate onSubmit={handleSubmit} autoComplete="off">
      <SignInTitle>로그인</SignInTitle>
      <FormInput
        title="이메일"
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        helperText={emailError}
      />
      <FormInput
        title="비밀번호"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        helperText={passwordError}
      />
      <Button type="submit" isValid={isValid}>
        로그인
      </Button>
      <SignUpLink to="/signup">회원가입</SignUpLink>
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

const SignInTitle = styled.h1`
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

export default SignInForm;
