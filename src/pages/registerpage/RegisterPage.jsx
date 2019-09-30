import React from "react";

import "./RegisterPage.scss";
import SignIn from "../../components/sigIn/SignIn";
import SignUp from "../../components/signUp/SignUp";

const RegisterPage = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default RegisterPage;
