import React from "react";
import "./Login.css";
import facebook from "../../../assets/facebook.svg";
import search from "../../../assets/search.svg";
import IdentificationCard from "../../../assets/IdentificationCard.svg";
import Envelope from "../../../assets/Envelope.svg";
import Phone from "../../../assets/Phone.svg";
import User from "../../../assets/User.svg";
import calendarBlank from "../../../assets/CalendarBlank.svg";
import LockSimple from "../../../assets/LockSimple.svg";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/500.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Register = () => {
  const styles = {
    typography: {
      color: "#FFFFFF",
    },
    textcolor: {
      color: "#848484",
      marginBottom: "10px",
      marginTop: "10px",
      fontSize: "15px",
    },
  };

  const schema = yup.object().shape({
    name: yup.string().required("Vui lòng nhập họ và tên"),
    email: yup.string().email().required("Vui lòng email"),
    phone: yup
      .string()
      .required("Vui lòng nhâp số điện thoại")
      .matches(/^\d{10}$/, "Số điện thoại phải có 10 chữ số"),
    date: yup.date().typeError("Vui lòng nhập ngày").required(),
    gender: yup.string().required("Vui lòng chọn giới tính"),
    // .oneOf(["male", "female"]),
    
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự.")
      .max(32),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Vui lòng nhập lại mật khẩu"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitRegister = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form className="signUpForm" onSubmit={handleSubmit(onSubmitRegister)}>
        <label style={styles.textcolor}>Họ và tên</label>
        <div className="signUpName">
          <img className="icon_signUp" src={IdentificationCard} alt="" />
          <input type="text" placeholder="Họ và tên" {...register("name")} />
        </div>
        <p className="errorMsg">{errors.name?.message}</p>
        <label style={styles.textcolor}>Email</label>
        <div className="signUpEmail">
          <img className="icon_signUp" src={Envelope} alt="" />
          <input {...register("email")} placeholder="email" type="email" />
        </div>
        <p className="errorMsg">{errors.email?.message}</p>
        <label style={styles.textcolor}>SĐT</label>
        <div className="signUpSDT">
          <img className="icon_signUp" src={Phone} alt="" />
          <input {...register("phone")} placeholder="SĐT" />
        </div>
        <p className="errorMsg">{errors.phone?.message}</p>
        <label style={styles.textcolor}>Ngày Sinh</label>
        <div className="signUpDay">
          <img className="icon_signUp" src={calendarBlank} alt="" />
          <input {...register("date")} type="date" placeholder="Ngày sinh" />
        </div>
        <p className="errorMsg">{errors.date?.message}</p>
        <label style={styles.textcolor}>Giới tính</label>
        <div className="signUpGender">
          <img className="icon_signUp" src={User} alt="" />
          <select className="" {...register("gender")}>
            <option value="">Chọn giới tính</option>
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </select>
        </div>
        <p className="errorMsg">{errors.gender?.message}</p>
        {/* <div className="signUpGender">
          <img className="icon_signUp" src={User} alt="" />
          <input type="text" placeholder="Nam/Nữ" required name="gender" />
        </div> */}
        <label style={styles.textcolor}>Mật khẩu</label>
        <div className="signUpPassword">
          <img className="icon_signUp" src={LockSimple} alt="" />
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
        </div>
        <p className="errorMsg">{errors.password?.message}</p>
        <label style={styles.textcolor}>Xác nhận mật khẩu</label>
        <div className="signUpconfirm">
          <img className="icon_signUp" src={LockSimple} alt="" />
          {/* <input
            {...register("confirmpassword")}
            type="password"
            placeholder="*******"
          /> */}
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="*******"
          />
        </div>
        <p className="errorMsg">{errors.confirmPassword?.message}</p>
        <Typography
          fontSize={12}
          style={styles.typography}
          align="center"
          mt={2}
          mb={2}
        >
          Đăng nhập với
        </Typography>

        <div className="login_google" style={{ marginBottom: 8 }}>
          <img src={search} alt="" />
          <Typography fontSize={10} ml={1} style={styles.typography}>
            Google
          </Typography>
        </div>
        <div className="login_face" style={{ marginBottom: 20 }}>
          <img src={facebook} alt="" />
          <Typography fontSize={10} ml={1} style={styles.typography}>
            Facebook
          </Typography>
        </div>
        <input type="submit" value="Register" className="signUpBtn" />
      </form>
    </div>
  );
};

export default Register;
