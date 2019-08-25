import React from "react";
import styled from "styled-components";
import { Label } from "../Menu/StyledGrid";
const Dialog = styled.div`
  width: 500px;
  height: 500px;
  max-height: calc(100% - 100px);
  background-color: white;
  position: fixed;
  top: 100px;
  left: calc(50% - 250px);
  z-index: 11;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img})`};
  background-position: center;
  background-size: cover;
`;

const DialogShadow = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.7;
  position: fixed;
  top: 0px;
  z-index: 10;
`;

const BannerName = styled(Label)`
  top: 100px;
  font-size: 30px;
  padding: 5px 30px;
`;

export default ({ openItem: { name, img } = {}, setOpenItem }) => {
  const close = () => setOpenItem();
  return name ? (
    <>
      <Dialog>
        <DialogBanner img={img}>
          <BannerName>{name}</BannerName>
        </DialogBanner>
      </Dialog>
      ;
      <DialogShadow onClick={close} />;
    </>
  ) : null;
};
