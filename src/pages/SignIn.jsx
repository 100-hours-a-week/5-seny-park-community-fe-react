import React from "react";
import styled from "styled-components";

export function SignIn() {
  return (
    <SignInContainer>
      <SignInForm>
        <SignInTitle>아무말 대잔치</SignInTitle>
        <SignInInput placeholder="Email" />
        <SignInInput placeholder="Password" />
        <SignInButton>Sign In</SignInButton>
      </SignInForm>
    </SignInContainer>
  );
}

const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;  

const SignInTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`;  

const SignInInput = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 0 8px;
  margin-bottom: 8px;
`;

const SignInButton = styled.button`
  width: 100%;
  height: 44px;
  background-color: #0095f6;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default SignIn;
