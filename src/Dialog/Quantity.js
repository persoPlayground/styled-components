import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 18px;
`;
const Quantity = ({ quantity, setQuantity, onChange }) => {
  console.log(quantity);
  return (
    <div>
      <div>Quantity</div>
      <Input onChange={onChange} value={quantity} />
    </div>
  );
};

export default Quantity;
