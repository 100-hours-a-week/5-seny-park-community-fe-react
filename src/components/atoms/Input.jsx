import React, { useState } from "react";
import styled from "styled-components";

const Input = ({ type, placeholder, value, onChange, ...props }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      onChange(e);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  return type === "file" ? (
    <div>
      <StyledInputImg
        id="hiddenFileInput"
        type="file"
        onChange={handleImageChange}
        style={{ display: "none" }}
        {...props}
      />
      <StyledDiv
        onClick={() => document.getElementById("hiddenFileInput").click()}
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* <!-- 플러스 기호 span으로 표현 --> */}
        <Plus></Plus>
        <Plus></Plus>
      </StyledDiv>
    </div>
  ) : (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 0 15px;
  box-sizing: border-box;
  outline: none;
  &:focus {
    border: 2px solid #aca0eb;
  }
`;

const StyledInputImg = styled.input``;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 16px 0px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    background-color: rgba(172, 160, 235, 0.2);
  }
`;

const Plus = styled.span`
  &:first-child {
    position: absolute;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #666;
    width: 1px;
    height: 20px;
  }
  &:last-child {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #666;
    width: 20px;
    height: 1px;
  }
`;
export default Input;
