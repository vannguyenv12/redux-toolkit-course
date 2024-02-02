import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEmail,
  changeName,
  createUser,
  fetchUserById,
  updateUser,
} from "../redux/user/user.slice";

// eslint-disable-next-line react/prop-types
function UserModal({
  show,
  handleClose,
  handleShow,
  userEditId,
  setUserEditId,
}) {
  const dispatch = useDispatch();

  const { name, email } = useSelector((state) => state.user.user);

  // Lift state up

  const handleSave = async () => {
    if (userEditId) {
      const data = { id: userEditId, name, email };
      dispatch(updateUser(data));
      toast.success("Updated User Successfully!");
    } else {
      console.log("hit");
      const data = { name, email };
      dispatch(createUser(data));
      // toast
      toast.success("Created User Successfully!");
    }
    // Close modal
    handleClose();
  };

  useEffect(() => {
    // Fetch API fetchUserById
    dispatch(fetchUserById(userEditId));
  }, [userEditId]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create New User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => dispatch(changeName(e.target.value))}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => dispatch(changeEmail(e.target.value))}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserModal;
