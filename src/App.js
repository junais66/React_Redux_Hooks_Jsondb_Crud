import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addUser" element={<AddUser />} />
        <Route exact path="/editUser/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
