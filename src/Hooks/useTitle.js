import { useEffect } from "react";

const useTitle = (openItem, order) => {
  return useEffect(() => {
    if (openItem) {
      document.title = openItem.name;
    } else {
      document.title =
        order.length === 0
          ? "Dessert"
          : `[${order.length}] items in your order`;
    }
  }, [openItem, order]);
};

export default useTitle;
