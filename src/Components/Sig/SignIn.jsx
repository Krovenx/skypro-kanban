import React from "react";
import SignUp from "../Pages/SignUp";
import AuthForm from "../AuthForm/AuthForm";

const SignInPage = () => {
  return <AuthForm SignUp={false} />;
};

export default SignInPage;
