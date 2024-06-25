export const validateImg = (img) => {
  const imgRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
  return imgRegex.test(img);
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateNickname = (nickname) => {
  const nicknameRegex = /^[^\s]+$/;
  return nickname.length <= 10 && nicknameRegex.test(nickname);
};

export const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  return passwordRegex.test(password);
};
