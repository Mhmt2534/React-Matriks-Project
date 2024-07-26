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
import { useContext, useEffect, useState } from "react";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import CryptoDetails from "./pages/CryptoDetails";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>();
  const [appTheme, setAppTheme] = useState<boolean>();

  const context = useContext(AuthContext);

  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const isSign = localStorage.getItem("isSign");

    isSign ? setLoggedIn(true) : setLoggedIn(false);
  }, []);

  const toggleTheme = () => {
    themeContext?.setTheme(!themeContext?.theme);
  };

  return (
    <ThemeProvider>
      <div className={themeContext?.theme ? "light-theme" : "dark-theme"}>
        <AuthProvider>
          <ToastContainer position="bottom-right" limit={2} autoClose={3000} />
          <Header />
          <div style={{ marginBottom: "80px" }}>
            <Routes>
              {loggedIn ? (
                <Route path="/" element={<Home />} />
              ) : (
                <Route path="/" element={<FirstHome />} />
              )}
              <Route path="/login" element={<Login />} />

              <Route path="/signup" element={<SignUp />} />

              {loggedIn ? (
                <Route path="/home" element={<Home />} />
              ) : (
                <Route path="/home" element={<ErrorPage />} />
              )}
              {loggedIn ? (
                <Route path="/about" element={<About />} />
              ) : (
                <Route path="/about" element={<ErrorPage />} />
              )}
              {loggedIn ? (
                <Route
                  path="/home/cryptodetail/:symbol"
                  element={<CryptoDetails />}
                />
              ) : (
                <Route
                  path="/home/cryptodetail/:symbol"
                  element={<ErrorPage />}
                />
              )}
              {loggedIn ? (
                <Route path="/home/favorites" element={<Favorites />} />
              ) : (
                <Route path="/home/favorites" element={<ErrorPage />} />
              )}
            </Routes>
          </div>
          <Footer />
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
