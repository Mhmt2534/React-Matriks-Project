import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Sign.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

interface ILogin {
  onLogin: (data: any) => void;
}

const Login: React.FC = () => {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const email = data.email;
    const storedData = localStorage.getItem(email);

    if (storedData) {
      const userData: any = JSON.parse(storedData);
      if (userData) {
        // getItem can return actual value or null
        if (userData.password === data.password) {
          authContext?.setIsLogin(true);
          authContext?.setUserName(userData.name);

          localStorage.setItem("isSign", JSON.stringify(userData));

          toast.success(`${userData.name}  You Are Successfully Logged In`);
          console.log(`${userData.name}  You Are Successfully Logged In`);
          window.location.assign("/home");
        } else {
          toast.error("Email or Password is not matching with our record");
          console.log("a");
        }
      } else {
        toast.error("Email or Password is not matching with our record");
        console.log("b");
      }
    } else {
      toast.error("Email or Password is not matching with our record");
      console.log(`c`);
    }
  };

  return (
    <div id="SignCss" className="loginlog">
      <div>
        <div className="container">
          <div className="screen">
            <div className="screen__content">
              <form className="login" onSubmit={handleSubmit(onSubmit)}>
                <div className="login__field">
                  <FaUser className="login_icon" />
                  <input
                    type="email"
                    className="login__input"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>Email is mandatory </span>
                  )}
                </div>
                <div className="login__field">
                  <FaLock />
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                    {...register("password")}
                  />
                </div>
                <input type={"submit"} className="login__submit" />
              </form>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
