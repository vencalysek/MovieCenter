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
      <span className="warning mt-5">
        Sign In and Sign Up functions are provided by Google firebase application.
      </span>
      <span className="warning">
        Please do not violate any rules nor try to abuse functions of this application.
      </span>
      <span className="warning">*You can use fake email for registration.</span>
    </div>
  );
};

export default SignInSignUp;
