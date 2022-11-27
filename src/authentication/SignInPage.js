import React, { useRef } from "react";
import "../App.css";
import {Link} from "react-router-dom";

import firebase from "firebase/compat/app";

const SignInPage = () => {
  const emailRefSignIn = useRef();
  const passwordRefSignIn = useRef();

  const SignIn = (e) => {
    e.preventDefault();
    document.getElementById("message").innerHTML = "sending...";
      
    firebase
      .auth()
      .signInWithEmailAndPassword(
        emailRefSignIn.current.value,
        passwordRefSignIn.current.value
      )
      .then(function() {
        console.log('User is SignedIn!');
        document.getElementById("message").innerHTML = "Successfully Logged in!";
    
        // navigate('/')
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        document.getElementById("message").innerHTML = errorCode.split("/")[1];
      });
  };

  return (
      <div className="center">
        <form>
          <div className="container">
            <h1>SignIn</h1>
            <input
              type="text"
              id="sign-email"
              placeholder="Enter Email"
              name="email"
              ref={emailRefSignIn}
              required
            ></input>
            <input
              type="password"
              id="sign-password"
              placeholder="Enter Password"
              name="psw"
              ref={passwordRefSignIn}
              required
            ></input>
            <Link to="/">
              <p>Don't have an account?</p>
            </Link>
            <p id="message" style={{color: "red"}}></p>
            <div className={`clearfix center`}>
              <button
                type="submit"
                className="signupbtn"
                onClick={(e) => {
                  SignIn(e);
                }}
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
    </div>
  );
};

export default SignInPage;
