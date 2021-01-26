import React, {useState} from "react";

import {auth, createUserProfileDoc} from "../../firebase/firebase.config";

import FormInput from "../form-input/FormInput";
import "./signUp.styles.scss";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      let {user} = await auth.createUserWithEmailAndPassword(email, password);

      await user.updateProfile({
        displayName,
      })

      await createUserProfileDoc(user);
      setDisplayName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')


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
          label="Display name"
          type="text"
          onChange={e => setDisplayName(e.target.value)}
          value={displayName}
          name='displayName'
          required
        />

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

        <FormInput
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          label="Confirm password"
          name='confirmPassword'
          required
        />

          <button className="button" type='submit'>Sign Up</button>

      </form>
    </div>
  );
};

export default SignUp;
