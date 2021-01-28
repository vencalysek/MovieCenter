import React from "react";
import SignIn from "../../components/sing-in/SignIn";
import SignUp from "../../components/sing-up/SignUp";
import "./signInSignUp.styles.scss";

const SignInSignUp = () => {
  return (
    <div className="sign-in-up">
      <div className="sign-in-up__wrapper">
        <SignIn />
        <SignUp />
      </div>
      <p className="mt-5 text-danger">
        Sign In and Sign Up functions are provided by Google firebase application.
      </p>
      <p className="text-danger">
        Please do not violate any rules nor try to abuse functions of this application.
      </p>
      <p className="text-danger">*You can use fake email for registration.</p>
    </div>
  );
};

export default SignInSignUp;
