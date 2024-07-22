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
import { useContext, useState } from "react";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import CryptoDetails from "./pages/CryptoDetails";
import Favorites from "./pages/Favorites";

function App() {
  const context = useContext(AuthContext);

  return (
    <>
      <AuthProvider>
        <ToastContainer position="bottom-right" limit={2} autoClose={3000} />
        <Header />
        <Routes>
          <Route path="/" element={<FirstHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/home/cryptodetail/:symbol"
            element={<CryptoDetails />}
          />
          <Route path="/home/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
