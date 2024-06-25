import React from "react";
import styled from "styled-components";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>커뮤니티</HeaderTitle>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 104px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 16px 0px;
  box-sizing: border-box;
  display: fixed;
  width: 100%;
  background-color: white;
  z-index: 1;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
  box-sizing: border-box;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;
