import React from "react";
import styled from "styled-components";
import { Label } from "../Menu/StyledGrid";
const Dialog = styled.div`
  width: 500px;
  max-height: calc(100% - 100px);
  background-color: white;
  position: fixed;
  top: 100px;
  left: calc(50% - 250px);
  z-index: 11;
  display: flex;
  flex-direction: column;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img})`};
  background-position: center;
  background-size: cover;
`;

const BannerName = styled(Label)`
  top: 100px;
  font-size: 30px;
  padding: 5px 30px;
`;

const DialogContent = styled.div`
  overflow: auto;
  min-height: 200px;
`;
const DialogFooter = styled.div`
  box-shadow: 0px 2px 20px 0px grey;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonConfirm = styled.div`
  margin: 10px;
  background-color: #689f38;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  font-weight: bold;
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
export default ({ openItem: { name, img } = {}, setOpenItem }) => {
  const close = () => setOpenItem();
  return name ? (
    <>
      <Dialog>
        <DialogBanner img={img}>
          <BannerName>{name}</BannerName>
        </DialogBanner>
        <DialogContent />
        <DialogFooter>
          <ButtonConfirm>Confirm</ButtonConfirm>
        </DialogFooter>
      </Dialog>
      ;
      <DialogShadow onClick={close} />;
    </>
  ) : null;
};
