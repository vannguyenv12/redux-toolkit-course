import UserTable from "./components/UserTable";
import Header from "./components/Navbar";
import UserModal from "./components/UserModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetUser } from "./redux/user/user.slice";
import UserDeleteModal from "./components/UserDeleteModal";

function App() {
  const [show, setShow] = useState(false);

  const [showDelete, setShowDelete] = useState(false);
  const [userEditId, setUserEditId] = useState(null);
  const [userDeleteId, setUserDeleteId] = useState(null);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(resetUser());
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleDeleteClose = () => {
    dispatch(resetUser());
    setShowDelete(false);
  };

  const handleDeleteShow = () => setShowDelete(true);

  return (
    <div>
      <Header />
      <UserTable
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        handleDeleteClose={handleDeleteClose}
        handleDeleteShow={handleDeleteShow}
        // EDIT
        userEditId={userEditId}
        setUserEditId={setUserEditId}
        // DELETE
        userDeleteId={userDeleteId}
        setUserDeleteId={setUserDeleteId}
      />
      <UserModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        userEditId={userEditId}
        setUserEditId={setUserEditId}
      />

      <UserDeleteModal
        show={showDelete}
        handleClose={handleDeleteClose}
        handleShow={handleDeleteShow}
        userDeleteId={userDeleteId}
        setUserDeleteId={setUserDeleteId}
      />
    </div>
  );
}

export default App;
