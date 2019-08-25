import React from "react";
import styled from "styled-components";

import Data from "../Data";
import { StyledGrid, Items, Label } from "./StyledGrid";

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;

const Menu = ({ setOpenItem }) => {
  return (
    <MenuStyled>
      {Object.entries(Data).map(([sectionName, items]) => (
        <React.Fragment key={sectionName}>
          <h1>{sectionName}</h1>
          <StyledGrid>
            {items.map(({ name, img }) => (
              <Items
                key={name}
                img={img}
                onClick={() => setOpenItem({ name, img })}
              >
                <Label>{name}</Label>
              </Items>
            ))}
          </StyledGrid>
        </React.Fragment>
      ))}
    </MenuStyled>
  );
};

export default Menu;
