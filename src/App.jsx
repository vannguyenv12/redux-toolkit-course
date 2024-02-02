import UserTable from "./components/UserTable";
import Header from "./components/Navbar";
import UserModal from "./components/UserModal";
import { useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const response = await axios.get("http://localhost:3000/users");
    setUsers(response.data);
  }

  return (
    <div>
      <Header />
      <UserTable users={users} fetchUsers={fetchUsers} />
      <UserModal fetchUsers={fetchUsers} />
    </div>
  );
}

export default App;
