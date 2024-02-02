import UserTable from "./components/UserTable";
import Header from "./components/Navbar";
import UserModal from "./components/UserModal";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/user/user.slice";

function App() {
  return (
    <div>
      <Header />
      <UserTable />
      <UserModal />
    </div>
  );
}

export default App;
