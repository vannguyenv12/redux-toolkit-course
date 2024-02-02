import UserTable from "./components/UserTable";
import Header from "./components/Navbar";
import UserModal from "./components/UserModal";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [userEditId, setUserEditId] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Header />
      <UserTable
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        userEditId={userEditId}
        setUserEditId={setUserEditId}
      />
      <UserModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        userEditId={userEditId}
      />
    </div>
  );
}

export default App;
