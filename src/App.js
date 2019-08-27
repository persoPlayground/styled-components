import React from "react";
import GlobalStyle from "./Styles/GlobalSTyle";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Menu from "./Menu";
import Order from "./Order";
import Dialog from "./Dialog";

import useOpenItem from "./Hooks/useOpenItem";
import useOrder from "./Hooks/useOrder";
import useTitle from "./Hooks/useTitle";

function App() {
  const [openItem, setOpenItem] = useOpenItem();
  const [order, setOrder] = useOrder();
  useTitle(openItem, order);
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Banner />
      <Menu setOpenItem={setOpenItem} />
      <Order order={order} setOrder={setOrder} />
      <Dialog
        openItem={openItem}
        setOpenItem={setOpenItem}
        order={order}
        setOrder={setOrder}
      />
    </>
  );
}

export default App;
