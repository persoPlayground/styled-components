import React from "react";
import styled from "styled-components";
import {
  ButtonConfirm,
  DialogContent,
  DialogFooter as OrderFooter
} from "../Dialog";

import { priceFormat } from "../helpers";

const StyledOrder = styled.div`
  position: fixed;
  right: 0px;
  top: 74px;
  width: 340px;
  height: calc(100% - 100px);
  background-color: white;
  z-index: 10;
  box-shadow: 4px 0px 5px 4px #dddddd;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
  padding: 20px 10px;
  height: 95%;
`;

const OrderItems = styled.div`
  padding: 10px 1px;
  border-bottom: 1px solid grey;
`;

const SingleItem = styled.div`
  padding: 5px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;
export default ({ order }) => (
  <StyledOrder>
    <OrderContent>
      <OrderItems>
        {" "}
        {order.length === 0
          ? "Empty Basket"
          : order.map(({ name, price }) => (
              <SingleItem key={name}>
                <div>{1}</div>
                <div>{name}</div>
                <div>{priceFormat(price)}</div>
              </SingleItem>
            ))}
      </OrderItems>
    </OrderContent>
    <OrderFooter>
      <ButtonConfirm>Checkout</ButtonConfirm>
    </OrderFooter>
  </StyledOrder>
);
