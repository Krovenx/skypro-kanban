import React from "react";
import AuthForm from "../AuthForm/AuthForm";

const SignUpPage = ({ setIsAuth }) => {
  return <AuthForm isSignUp={true} setIsAuth={setIsAuth} />; // 👈 исправь: isSignUp вместо SignUp
};

export default SignUpPage;
