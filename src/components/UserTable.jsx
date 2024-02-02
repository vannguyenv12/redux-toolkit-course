/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function UserTable({ users, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

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
                <Button variant="primary">Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default UserTable;
