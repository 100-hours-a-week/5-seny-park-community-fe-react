// 이메일 유효성 검사 함수
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 비밀번호 유효성 검사 함수 (예시)
export const validatePassword = (password) => {
  // 비밀번호는 8자 이상, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  return passwordRegex.test(password);
};

// 닉네임 유효성 검사 함수 (예시)
export const validateNickname = (nickname) => {
  // 닉네임은 띄워쓰기 불가, 10글자 이내
  const nicknameRegex = /^[^\s]{1,10}$/;
  return nicknameRegex.test(nickname);
};

export const validateImg = (img) => {
  const imgRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
  return imgRegex.test(img);
};
