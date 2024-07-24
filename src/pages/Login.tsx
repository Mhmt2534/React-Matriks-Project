import React, { useContext } from "react";
import "./Sign.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

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
    <div className="marg">
      <p className="title">Login Form</p>

      <form className="Register" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span style={{ color: "red" }}>*Email* is mandatory </span>
        )}
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </div>
  );
};

export default Login;
