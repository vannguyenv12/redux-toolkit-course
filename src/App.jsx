import UserTable from "./components/UserTable";
import Header from "./components/Navbar";
import UserModal from "./components/UserModal";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Header />
      <UserTable
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <UserModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </div>
  );
}

export default App;
