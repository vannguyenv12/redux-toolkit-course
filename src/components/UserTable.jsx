/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { fetchUsers } from "../redux/user/user.slice";
import { useDispatch, useSelector } from "react-redux";

function UserTable({
  handleClose,
  handleShow,
  userEditId,
  setUserEditId,
  handleDeleteShow,
  handleDeleteClose,
  userDeleteId,
  setUserDeleteId,
}) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleEdit = (userId) => {
    handleShow();
    setUserEditId(userId);
  };

  const handleDelete = (userId) => {
    handleDeleteShow();
    setUserDeleteId(userId);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="primary" onClick={() => handleEdit(user.id)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default UserTable;
