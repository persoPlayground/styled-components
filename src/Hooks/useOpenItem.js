import { useState } from "react";

const useOpenItem = () => {
  const [openItem, setOpenItem] = useState();
  return [openItem, setOpenItem];
};

export default useOpenItem;
