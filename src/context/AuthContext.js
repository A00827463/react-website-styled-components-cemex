import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const [dbEmail, setDbEmail] = useState();
  const [dbPassword, setDbPassword] = useState();

  function signup(email, password) {
    /*------------- Azure DataBase Api-------------*/
    // let data = {
    //   email: email,
    //   password: password
    // };
    // fetch("/signup", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: { "Content-Type": "application/json" },
    // })
    // return true;
    /*------------- Azure DataBase Api -------------*/


    /*------------- FireBase -------------*/
    return auth.createUserWithEmailAndPassword(email, password);
    /*------------- FireBase -------------*/
  }

  function login(email, password) {
    /*------------- Azure DataBase Api-------------*/
    // let data = {
    //   email: email,
    // };
    // fetch("/login", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();
    //     }
    //   })
    //   .then((jsonRes) => {
    //     setDbEmail(jsonRes.recordset[0].Email);
    //     setDbPassword(jsonRes.recordset[0].Password);
    //   });
    // if (email !== dbEmail || password !== dbPassword) {
    //   return false;
    // }
    // return true;
    /*------------- Azure DataBase Api -------------*/


    /*------------- FireBase -------------*/
    return auth.signInWithEmailAndPassword(email, password);
    /*------------- FireBase -------------*/
  }


  function logout() {
    return auth.signOut();
    // return true
  }
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
    // return true
  }
  function updateEmail(email) {
    return currentUser.updateEmail(email);
    // return true
  }
  function updatePassword(password) {
    return currentUser.updatePassword(password);
    // return true
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
