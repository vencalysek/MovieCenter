import React from 'react'
import SignIn from '../../components/sing-in/SignIn'
import SignUp from '../../components/sing-up/SignUp'
import './signInSignUp.styles.scss'

const SignInSignUp = () => {
  return (
    <div className='sign-in-up'>
      <div className="sign-in-up__wrapper">

      <SignIn />
      <SignUp />
      </div>
    </div>
  )
}

export default SignInSignUp
