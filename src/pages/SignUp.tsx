import { useForm } from "react-hook-form";
import "./Sign.css";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaLock, FaUser } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { ColorContext } from "../context/ColorContext";

interface ISignUp {
  onRegister: (data: any) => void;
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const email = data.email;
    const storedData = localStorage.getItem(email);
    if (!storedData) {
      localStorage.setItem(
        data.email,
        JSON.stringify({
          name: data.name,
          password: data.password,
        })
      );
      console.log(data.name);
      navigate("/login");
      toast.success("Kayıt olundu");
    } else {
      console.log("Bu kullanıcı  kayıtlı");
      toast.error("Bu kullanıcı zaten kayıtlı");
    }
  };

  const style = {
    color: "black",
  };

  return (
    <div id="SignCss" className="signuplog">
      <div>
        <div className="container">
          <div className="screen">
            <div className="screen__content">
              <form className="login" onSubmit={handleSubmit(onSubmit)}>
                <div className="login__field">
                  <FaUser className="login_icon" style={style} />
                  <input
                    type="text"
                    className="login__input"
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>Email is mandatory </span>
                  )}
                </div>
                <div className="login__field">
                  <FaUser style={style} />
                  <input
                    type="text"
                    className="login__input"
                    placeholder="Surename"
                    {...register("surname")}
                  />
                </div>
                <div className="login__field">
                  <MdEmail style={style} />
                  <input
                    type="email"
                    className="login__input"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="login__field">
                  <FaLock style={style} />
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

export default SignUp;
