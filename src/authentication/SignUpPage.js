import React, { useRef } from "react";
import { useAuth } from "../context/AuthContext.js";
import { auth } from "./Firebase.js";
import "../App.css";
import { SignUp } from "./Firebase.js";
import firebase from "firebase/compat/app";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const SignUp = (e) => {
    e.preventDefault();
    if (passwordRef.current.value === passwordConfirmRef.current.value) {
      document.getElementById("message").innerHTML = "sending...";
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then(function () {
          console.log("User Created!");
          navigate("/SignInPage");
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          document.getElementById("message").innerHTML = errorCode.split("/")[1];
        });
    } else {
      document.getElementById("message").innerHTML = "Password Didn't match";
    }
  };
  // const {signup} = useAuth()

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          width: 400,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div>
          <form>
            <div className="container">
              <h1>Sign Up</h1>
              <input
                type="text"
                id="email"
                placeholder="Enter Email"
                name="email"
                ref={emailRef}
                required
              ></input>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                name="psw"
                ref={passwordRef}
                required
              ></input>
              <input
                type="password"
                id="repeat-password"
                placeholder="Repeat Password"
                name="repeat-password"
                ref={passwordConfirmRef}
                required
              ></input>
              <Link to="/SignInPage">
                <p>Already Have an Account?</p>
              </Link>
              <p id="message" style={{color: "red"}}></p>
              <p id="password-match" style={{ color: "red" }}></p>
              <div className="clearfix">
                <button
                  type="submit"
                  className="signupbtn"
                  onClick={(e) => {
                    SignUp(e);
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
