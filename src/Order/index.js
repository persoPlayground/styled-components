import React from "react";
import styled from "styled-components";

const StyledOrder = styled.div`
  position: fixed;
  right: 0px;
  top: 74px;
  width: 340px;
  height: calc(100% - 50px);
  background-color: white;
  z-index: 10;
  box-shadow: 4px 0px 5px 4px #dddddd;
`;

export default () => <StyledOrder>Empty Basket</StyledOrder>;
