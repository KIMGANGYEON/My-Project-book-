import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface FormData {
  email: string;
  name: string;
  password: string;
  phone: string;
  year: string;
  month: string;
  day: string;
  gender: string;
}
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  const userEmail = {
    required: "필수 필드입니다.",
  };
  const userName = {
    required: "필수 필드입니다.",
  };

  const userPassword = {
    required: "필수 필드입니다.",
    minLength: {
      value: 6,
      message: "최소 6자입니다",
    },
  };

  const userPhone = {
    required: "필수 필드입니다.",
  };

  const years = Array.from(
    { length: new Date().getFullYear() - 1950 + 1 },
    (v, k) => 1950 + k
  );
  const months = Array.from({ length: 12 }, (v, k) => k + 1);
  const days = Array.from({ length: 31 }, (v, k) => k + 1);

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
            <label htmlFor="name">Name</label>
            <input type="string" id="name" {...register("name", userName)} />
            {errors?.name && (
              <div>
                <span style={{ color: "red" }}>{errors.name.message}</span>
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

          <div className="login-input-box">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" {...register("phone", userPhone)} />
            {errors?.phone && (
              <div>
                <span style={{ color: "red" }}>{errors.phone.message}</span>
              </div>
            )}
          </div>

          <div className="born-year">
            <label htmlFor="year">출생년도</label>
            <select id="year" {...register("year")}>
              {/* <option>년도</option> */}
              {years.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>

            <label htmlFor="month">월</label>
            <select id="month" {...register("month")}>
              {months.map((month) => (
                <option key={month}>{month}</option>
              ))}
            </select>

            <label htmlFor="day">일</label>
            <select id="day" {...register("day")}>
              {days.map((day) => (
                <option key={day}>{day}</option>
              ))}
            </select>
          </div>

          <div className="login-input-box gender">
            <p>Gender</p>
            <div>
              <label htmlFor="men">
                <input type="checkbox" id="men" {...register("gender")} />
                Men
              </label>
              <label htmlFor="women">
                <input type="checkbox" id="women" {...register("gender")} />
                Women
              </label>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button>회원가입</button>
          </div>
          <p className="login-footer">
            아이디가 있으신가요?
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span> 로그인</span>
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
