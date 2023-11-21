import { useState } from "react";
import AppBar from "../components/AppBar";
import FloatButton from "../components/FloatButton";
import Modal from "../components/Modal";


function Home() {

  const [open,setOpen] = useState(false)

  function handleModal(){
    setOpen(!open)
  }

  return (
    <>
      <AppBar />
      <FloatButton handleClick={ handleModal } />
      <Modal open={open} handleClose={handleModal} />
    </>
  );
}

export default Home;
