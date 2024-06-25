import React from "react";
import styled from "styled-components";

const HelperText = ({ children }) => {
  return <StyledHelperText>{children}</StyledHelperText>;
};

const StyledHelperText = styled.div`
  height: 15px;
  font-size: 11px;
  color: #ff0000;
  font-weight: 400;
`;

export default HelperText;
