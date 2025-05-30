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




//   const createUser = async (email, password, name, photoURL = null) => {
//   setLoading(true);
//   const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//   // Set displayName and photoURL after account creation
//   await updateProfile(userCredential.user, {
//     displayName: name,
//     photoURL: photoURL || "https://i.ibb.co/JF3n8Nf/default-avatar.png", // fallback photo
//   });

//   // Reload user info
//   await userCredential.user.reload();

//   return userCredential;
// };


const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = async (email, password) => {
    setLoading(true);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Force reload to get latest profile info (displayName, photoURL)
    if (auth.currentUser) {
      await auth.currentUser.reload();
    }
    return userCredential;
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Force refresh to get latest profile info
        await currentUser.reload();
        setUser({ ...currentUser });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <Loading></Loading> 
  }

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
  
  };
  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;