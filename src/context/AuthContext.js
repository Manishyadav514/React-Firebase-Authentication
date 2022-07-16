import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [CurrentUser, setCurrentUser] = useState();
  const CurrentUserDetails = [CurrentUser];

  function signup(email, password) {
    return firebase.auth.createUserWithEmailAndPassword(email, password);
  }

  function signin(auth, email, password) {
    firebase.auth
      .signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  function signout(auth) {
    firebase.auth
      .signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  function SignUp(auth, email, password) {
    firebase.auth
      .createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    // const unsubscribe = auth.onAuthChange((user) => {
    //     setCurrentUser(user);
    // });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={CurrentUserDetails}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
