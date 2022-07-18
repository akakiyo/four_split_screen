import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = (): JSX.Element => {
  return <Wrapper>脳波測定</Wrapper>;
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  background-color: #000000;
`;
export default Header;
