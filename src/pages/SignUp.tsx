import { useForm } from "react-hook-form";
import "./Sign.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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

  return (
    <div className="marg">
      <p className="title">Registration Form</p>

      <form className="Register" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="name"
          {...register("name", { required: true })}
        />
        <input type="text" placeholder="surename" {...register("surname")} />
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </div>
  );
};

export default SignUp;
