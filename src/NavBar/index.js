import React from "react";
import styled from "styled-components";

import { main } from "../Styles/colours";
import { Title } from "../Styles/titles";

const NavbarStyled = styled.div`
  background-color: ${main};
  padding: 10px;
  width: 100%;
  position: fixed;
  z-index: 999;
`;
const Logo = styled(Title)`
  font-size: 40px;
  color: white;
  text-shadow: 1px 1px 4px black;
`;

export default () => (
  <NavbarStyled>
    <Logo>
      Cake{" "}
      <span role="img" aria-label="logo">
        ✨
      </span>
    </Logo>
  </NavbarStyled>
);
