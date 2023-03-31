import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/FontAwesomeIcons";
import "./styles/styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="forgot-password" element={<ForgotPassword />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
