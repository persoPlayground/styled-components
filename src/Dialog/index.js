import React from "react";
import styled from "styled-components";
import { Label } from "../Menu/StyledGrid";
import Quantity from "./Quantity";

import useQuantity from "../Hooks/useQuantity";
import { priceFormat } from "../helpers";

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

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 200px;
`;
export const DialogFooter = styled.div`
  box-shadow: 0px 2px 20px 0px grey;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonConfirm = styled.div`
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
export default ({
  openItem: { name, img, price } = {},
  setOpenItem,
  order,
  setOrder
}) => {
  const close = () => setOpenItem();
  const handleOrder = () => {
    setOrder([...order, { name, price }]);
    close();
  };
  const quantity = useQuantity();

  return name ? (
    <>
      <Dialog>
        <DialogBanner img={img}>
          <BannerName>{name}</BannerName>
        </DialogBanner>
        <DialogContent>
          <Quantity {...quantity} />
        </DialogContent>
        <DialogFooter>
          <ButtonConfirm onClick={handleOrder}>
            Add - {priceFormat(price)}
          </ButtonConfirm>
        </DialogFooter>
      </Dialog>
      ;
      <DialogShadow onClick={close} />;
    </>
  ) : null;
};
