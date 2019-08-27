import { useState } from "react";

const useQuantity = defaultQuantity => {
  const [quantity, setQuantity] = useState(defaultQuantity || 1);
  function onChange({ target }) {
    if (!+target.value >= 1) {
      setQuantity(1);
      return;
    }
    setQuantity(target.value);
  }
  return { quantity, setQuantity, onChange };
};

export default useQuantity;
