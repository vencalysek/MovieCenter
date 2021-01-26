import React, {useState} from "react";

import {auth, signInWithGoogle} from "../../firebase/firebase.config";

import FormInput from "../form-input/FormInput";
import "./signIn.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      // if succeeds reset state and form
      this.setState({email: "", password: ""});
    } catch (error) {
      alert(`${error.message}`);
    }

  };

  return (
    <div className="sign-in">
      <h2 className='sign-in__title' >Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          name='email'
          required
        />

        <FormInput
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          label="Password"
          name='password'
          required
        />

        <div className="button__container">
          <button className="button" type='submit'>Sign In</button>
          <button className="button" type='button'>
            Sign In With Google
          </button>
        </div>

      </form>
    </div>
  );
};

export default SignIn;
