import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { validateEmail } from "../utils/validation";
import { HELPER_TEXT } from "../constants/helperTexts";
import SignInForm from "../components/organisms/SignInForm";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateForm = () => {
    const emailValid = validateEmail(email);
    const passwordValid = password.length > 0;
    return emailValid && passwordValid;
  };

  useEffect(() => {
    setIsValid(validateForm());
  }, [email, password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError(HELPER_TEXT.EMAIL_EMPTY);
    } else if (!validateEmail(e.target.value)) {
      setEmailError(HELPER_TEXT.EMAIL_VALIDATION_FALSE);
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError(HELPER_TEXT.PASSWORD_EMPTY);
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!email) {
      setEmailError(HELPER_TEXT.EMAIL_EMPTY);
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError(HELPER_TEXT.EMAIL_VALIDATION_FALSE);
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError(HELPER_TEXT.PASSWORD_EMPTY);
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      // 유효성 검사가 통과된 경우 로그인 로직을 수행합니다.
      console.log("로그인 성공!");
    }
  };

  return (
    <Container>
      <SignInForm
        email={email}
        password={password}
        emailError={emailError}
        passwordError={passwordError}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
        isValid={isValid}
      />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`;

export default SignIn;
