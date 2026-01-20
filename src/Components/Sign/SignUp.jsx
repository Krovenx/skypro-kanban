import React from "react";
import AuthForm from "../AuthForm/AuthForm";

const SignIn = ({ setIsAuth }) => {
  return <AuthForm isSignUp={true} setIsAuth={setIsAuth} />;
};

export default SignIn;