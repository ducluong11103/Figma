import React, { useState, Fragment } from "react";
import "./Login.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import facebook from "../../../assets/facebook.svg";
import search from "../../../assets/search.svg";
// import IdentificationCard from "../../assets/IdentificationCard.svg";
// import Envelope from "../../assets/Envelope.svg";
// import Phone from "../../assets/Phone.svg";
// import User from "../../assets/User.svg";
// import calendarBlank from "../../assets/CalendarBlank.svg";
// import LockSimple from "../../assets/LockSimple.svg";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/500.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Register from "./Register";

const Login = () => {
  const styles = {
    typography: {
      color: "#FFFFFF",
    },
    textcolor: {
      color: "#848484",
      fontSize: "15px",
    },
  };

  const [currentTab, setCurrentTab] = useState("login");

  const schema = yup.object().shape({
    email: yup.string().email().required("Vui lòng nhập Email."),
    password: yup.string().required("Vui lòng nhập mật khẩu.").min(6).max(32),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  // const onSubmitSinup = (data) => {
  //   console.log(data);
  //   reset();
  // };

  return (
    <Fragment>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div>
            <div className="login_signUp_toggle" style={{marginTop: "15%"}}>
              <p onClick={() => setCurrentTab("login")}>Đăng nhập</p>
              <p onClick={() => setCurrentTab("register")}>Đăng ký</p>
            </div>
            <button
              className={
                currentTab === "login" ? "active_login" : "active_register"
              }
            ></button>
          </div>
          {currentTab === "login" && (
            <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
              <label style={styles.textcolor}>Email</label>
              <div className="loginEmail">
                <MailOutlineIcon className="icon_login" />
                <input
                  {...register("email")}
                  placeholder="Email"
                  type="email"
                />
              </div>
              <p className="errorMsg">{errors.email?.message}</p>
              <label style={styles.textcolor}>Password</label>
              <div className="loginPassword">
                <LockOpenIcon className="icon_login" />
                <input
                  {...register("password")}
                  placeholder="Password"
                  type="password"
                />
              </div>
              <p className="errorMsg">{errors.password?.message}</p>
              <a href="#1">Quên mật khẩu ?</a>
              <input type="submit" value="Đăng nhập" className="loginBtn" />

              <Typography
                fontSize={12}
                style={styles.typography}
                align="center"
                mt={2}
                mb={1}
              >
                Đăng nhập với
              </Typography>

              <div className="login_google">
                <img src={search} alt="" />
                <Typography fontSize={10} ml={1} style={styles.typography}>
                  Google
                </Typography>
              </div>
              <div className="login_face">
                <img src={facebook} alt="" />
                <Typography fontSize={10} ml={1} style={styles.typography}>
                  Facebook
                </Typography>
              </div>
              <div className="hi">
                <Typography
                  style={styles.typography}
                  fontSize={12}
                  align="center"
                >
                  Bạn chưa có tài khoản? <a href="dk">Đăng kí</a>
                </Typography>
              </div>
            </form>
          )}

          {currentTab === "register" && <Register />}
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
