import axios from "axios";
import { User } from "../models/User";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export class UserService {
  addUser(user: User) {
    console.log(user);
    return axios
      .post("http://localhost:5029/api/User/register", user)
      .then((response) => {
        console.log("Kullanıcı eklendi", response.data);
        toast.success("Kayıt olma işlemi başarılı.");
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          toast.error(error.response.data); // Backend'den gelen hata mesajını gösterir
        } else {
          toast.error(
            "Kayıt olma işlemi başarısız oldu. Lütfen tekrar deneyin."
          );
        }
      });
  }

  userCheck(user: User) {
    return axios
      .post("http://localhost:5029/api/User/login", user)
      .then((response) => {
        console.log("Giriş yapıldıi", response.data);
        // let userEmail:any=user.email

        // let userName=axios
        // .get("http://localhost:5029/api/User/getbyemail", userEmail)
        // .then((response) => {
        //   console.log("Giriş yapıldıi", response.data);
        // });

        this.getName(user.email);

        // localStorage.setItem("isSign", JSON.stringify(user));
        // console.log(user);

        // window.location.assign("/home");
      })
      .catch((error) => {
        console.error("Giriş Yapılamadı", error);
      });
  }

  getName(userEmail: string) {
    return axios
      .get("http://localhost:5029/api/User/getbyemail", {
        params: {
          email: userEmail,
        },
      })
      .then((response) => {
        console.log("Giriş yapıldıi", response.data);
        console.log(response.data.name);
        localStorage.setItem("isSign", JSON.stringify(response.data.name));

        window.location.assign("/home");
      })
      .catch((error) => {
        console.error("Giriş Yapılamadı", error);
      });
  }
}
