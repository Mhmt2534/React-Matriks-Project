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
import { ColorContext, ColorProvider } from "./context/ColorContext";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const [appTheme, setAppTheme] = useState<boolean>();

  const context = useContext(AuthContext);

  const colorContext = useContext(ColorContext);

  if (!colorContext) {
    throw new Error("ColorContext must be used within a ColorProvider");
  }

  const { isBlack } = colorContext;

  const style = {
    backgroundColor: isBlack ? "black" : "white",
    color: isBlack ? "white" : "black",
  };

  useEffect(() => {
    const isSign = localStorage.getItem("isSign");

    isSign ? setLoggedIn(true) : setLoggedIn(false);
  }, []);

  return (
    <AuthProvider>
      <div style={style}>
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
              <Route
                path="/home"
                element={<RouteWrapper component={FirstHome} />}
              />
            )}
            {loggedIn ? (
              <Route path="/about" element={<About />} />
            ) : (
              <Route
                path="/about"
                element={<RouteWrapper component={FirstHome} />}
              />
            )}
            {loggedIn ? (
              <Route
                path="/home/cryptodetail/:symbol"
                element={<CryptoDetails />}
              />
            ) : (
              <Route
                path="/home/cryptodetail/:symbol"
                element={<RouteWrapper component={FirstHome} />}
              />
            )}
            {loggedIn ? (
              <Route path="/home/favorites" element={<Favorites />} />
            ) : (
              <Route
                path="/home/favorites"
                element={<RouteWrapper component={FirstHome} />}
              />
            )}
          </Routes>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export interface RouteWrapperProps {
  component: React.ComponentType;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  component: Component,
}) => {
  toast.error("Lütfen giriş yapınız");

  return <Component />;
};

export default App;
