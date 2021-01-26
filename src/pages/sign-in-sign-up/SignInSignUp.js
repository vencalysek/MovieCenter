import React from 'react'
import SignIn from '../../components/sing-in/SignIn'
import SignUp from '../../components/sing-up/SignUp'
import './signInSignUp.styles.scss'

const SignInSignUp = () => {
  return (
    <div className='sign-in-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInSignUp
