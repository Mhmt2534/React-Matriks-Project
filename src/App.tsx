import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import FirstHome from "./pages/FirstHome";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" limit={2} autoClose={3000} />
      <Header />
      <Routes>
        <Route element path="/" Component={FirstHome} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/home" Component={Home} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
