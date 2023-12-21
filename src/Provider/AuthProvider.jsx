import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // new User create
  const newUserCreate = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  User Login
  const userSign = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   // Google Login

  //   const googleLoginSystem = ()=>{
  //     setLoading(true)
  //     return signInWithPopup(auth,googleLogin)
  //   }

  // update Profile

  //   const updateUserProfile = (name,photo) =>{
  //       setLoading(true)
  //       return updateProfile(auth.currentUser,{
  //         displayName: name, photoURL: photo
  //       })
  //   }

  // user Sign Out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // on auth State change

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    newUserCreate,
    userSign,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
