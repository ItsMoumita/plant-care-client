import React, { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import Loading from "../Component/Loading";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(10000); 

  useEffect(() => {
    // Retrieve balance from localStorage on initial load
    const storedBalance = localStorage.getItem("balance");
    if (storedBalance) {
      setBalance(Number(storedBalance));
    }
  }, []);

  useEffect(() => {
    // Save balance to localStorage whenever it changes
    localStorage.setItem("balance", balance);
  }, [balance]);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

//   if (loading) {
//     return <Loading></Loading> 
//   }

  const googleProvider = new GoogleAuthProvider();

const googleSignIn = () => {
  setLoading(true);
  return signInWithPopup(auth, googleProvider);
};

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    googleSignIn,
    loading,
    setLoading,
    updateUser,
    balance,
    setBalance,
  };
  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;