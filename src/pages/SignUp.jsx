// src/components/SignUp.js
import React, { useState, useEffect } from "react";
import SignUpForm from "../components/organisms/SignUpForm";
import useFormValidation from "../hooks/useFormValidation";
import styled from "styled-components";

const SignUp = () => {
  const [formData, setFormData] = useState({
    profilePicture: null,
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const validateForm = useFormValidation();

  useEffect(() => {
    setFormErrors(validateForm(formData, false));
  }, [formData, validateForm]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData, true);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log("Form is valid, submit data here.");
    }
  };

  return (
    <Container>
      <SignUpForm
        formData={formData}
        formErrors={formErrors}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

export default SignUp;
