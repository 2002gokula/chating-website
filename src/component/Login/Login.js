import { Button } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  FacebookAuthProvider,
  onAuthStateChanged,
} from "firebase/auth"

import "./Login.css"
import { auth, provider } from "../../firebase"
import { actionTypes } from "../../reducer"
import { useStateValue } from "../../StateProvider"
const Login = () => {
  const [state, dispatch] = useStateValue()
  const [user, setUser] = useState({})

  const facebookSignIn = () => {
    const provider1 = new FacebookAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
        console.log(result)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })

        console.log(result)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: currentUser,
      })
    })
    return () => {
      unsubscribe()
    }
  }, [])
  return (
    <div className="Login">
      <div className="Login_page__Hero">
        <h1>Sign In to Make Chat</h1>
        <p>if you don’t have an account you can Register here!</p>
      </div>
      <div className="login__Conatiner">
        <h1>Welcome Back</h1>
        <input
          className="Email__Login"
          type="email"
          placeholder="Enter Email"
        />
        <input
          type="password"
          placeholder="Enter password"
          className="Password__Login"
        />

        <span className="Fotget__password">Recover Password ?</span>
        <button className="SignInBtn">Sign In</button>
        <div className="Login__MoreOption">
          {" "}
          <hr className="Border__Line" />
          <span className="Border__Middle">Or continue with</span>
          <hr className="Border__Line1" />
        </div>

        <div className="Login__Image">
          <div onClick={signIn} className="Login__Image__google">
            <img src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png" />
          </div>
          <div onClick={facebookSignIn} className="Login__image__faceBook">
            {" "}
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" />
          </div>
          <div className="Login__Image__Apple">
            {" "}
            <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
