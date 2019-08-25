import styled from "styled-components";
import { Title } from "../Styles/titles";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const Items = styled(Title)`
  height: 210px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: drop-shadow(2px 4px 6px black);
  padding: 15px;
  color: black;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 5px;
  transition-property: opacity margin-top;
  transition-duration: 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    margin-top: 0px;
    margin-bottom: 5px;
  }
`;

export const Label = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px;
`;
