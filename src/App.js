import React, { useState } from "react";
import GlobalStyle from "./Styles/GlobalSTyle";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Menu from "./Menu";
import Dialog from "./Dialog";

function App() {
  const [openItem, setOpenItem] = useState();
  console.log(openItem);
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Banner />
      <Menu setOpenItem={setOpenItem} />
      <Dialog openItem={openItem} setOpenItem={setOpenItem} />
    </>
  );
}

export default App;
