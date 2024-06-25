// src/hooks/useFormValidation.js
import { useCallback } from "react";
import {
  validateEmail,
  validateNickname,
  validatePassword,
  validateImg,
} from "../utils/validation";
import { HELPER_TEXT } from "../constants/helperText";

const useFormValidation = () => {
  return useCallback((data, isSubmitting) => {
    const { email, nickname, password, confirmPassword, profilePicture } = data;
    let errors = {};
    if (isSubmitting || email)
      errors.email = validateEmail(email)
        ? ""
        : email
        ? HELPER_TEXT.EMAIL_VALIDATION_FALSE
        : HELPER_TEXT.EMAIL_EMPTY;
    if (isSubmitting || nickname)
      errors.nickname = validateNickname(nickname)
        ? ""
        : nickname
        ? HELPER_TEXT.NICKNAME_VALIDATION_FALSE
        : HELPER_TEXT.NICKNAME_EMPTY;
    if (isSubmitting || password)
      errors.password = validatePassword(password)
        ? ""
        : password
        ? HELPER_TEXT.PASSWORD_VALIDATION_FALSE
        : HELPER_TEXT.PASSWORD_EMPTY;
    if (isSubmitting || confirmPassword)
      errors.confirmPassword =
        password === confirmPassword
          ? ""
          : confirmPassword
          ? HELPER_TEXT.PASSWORD_NOT_SAME
          : HELPER_TEXT.PASSWORD_CHECK_EMPTY;
    if (isSubmitting || profilePicture)
      errors.profilePicture = profilePicture
        ? ""
        : HELPER_TEXT.PROFILE_PICTURE_EMPTY;
    return errors;
  }, []); // 의존성 배열을 비움
};

export default useFormValidation;
