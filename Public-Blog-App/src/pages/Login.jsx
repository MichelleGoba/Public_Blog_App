import React from 'react';
//  This line imports two variables, auth and provider, from a file located at '../firebase-config'. These variables are likely related to Firebase authentication and will be used for signing in with Google.
import { auth, provider} from '../firebase-config';
// This line imports the signInWithPopup function from the 'firebase/auth' module. This function is used for displaying a pop-up window to handle the Google sign-in process.

import {signInWithPopup} from 'firebase/auth';  // This function will be called when the user clicks the "Sign in with Google" button.

function Login({setIsAuth} ) {

  const signInwithGoogle = () => {
    // result will contain all the information the user used to log in
    signInWithPopup(auth, provider).then((result) => {
      // local storage for log in (close tab and remain logged in)
      localStorage.setItem("isAuth", true ); 
      setIsAuth(true)   // this determines if you are logged in or not
    })

  }

  return (
    <div className='loginPage'>
      <p>Sign in with Google to continue</p>
      <button className='login-with-google-btn' onClick={signInwithGoogle}>Sign in with Google
      </button>
    </div>
  )
}

export default Login