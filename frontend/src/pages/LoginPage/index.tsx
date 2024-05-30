import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../store/thunkFunctions";

interface FormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ mode: "onChange" });

  const dispatch = useDispatch<any>();

  const onSubmit: SubmitHandler<FormData> = ({ email, password }) => {
    const body = {
      email,
      password,
    };

    dispatch(loginUser(body));
    reset();
  };
  const userEmail = {
    required: "필수 필드입니다.",
  };

  const userPassword = {
    required: "필수 필드입니다.",
    minLength: {
      value: 6,
      message: "최소 6자입니다",
    },
  };

  return (
    <section className="login-Page">
      <div className="login-wrap">
        <h1>회원가입</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-input-box">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email", userEmail)} />
            {errors?.email && (
              <div>
                <span style={{ color: "red" }}>{errors.email.message}</span>
              </div>
            )}
          </div>

          <div className="login-input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", userPassword)}
            />
            {errors?.password && (
              <div>
                <span style={{ color: "red" }}>{errors.password.message}</span>
              </div>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button>로그인</button>
          </div>
          <p className="login-footer">
            아이디가 없으신가요?
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span> 회원가입</span>
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
