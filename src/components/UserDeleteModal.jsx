import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserById, fetchUserById } from "../redux/user/user.slice";
import { toast } from "react-toastify";

function UserDeleteModal({ show, handleClose, handleShow, userDeleteId }) {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.user.user);

  const handleSave = () => {
    // Dispatch action to delete
    dispatch(deleteUserById(userDeleteId));

    toast.success("user delete id");

    // close modal
    handleClose();
  };

  useEffect(() => {
    // Fetch API fetchUserById
    dispatch(fetchUserById(userDeleteId));
  }, [userDeleteId]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete user: {name}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserDeleteModal;
