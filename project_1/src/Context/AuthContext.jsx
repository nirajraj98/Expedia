import React, { useState } from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [state, setState] = useState({
    email:"",
    firstname:"",
    Surname:"",
    password:""

  });
  function handleSignUp(email,firstname,Surname,password) {
    setState({
      ...state,
      email:email,
      firstname:firstname,
      Surname:Surname,
      password:password
    });
  }
//   function handleLogout() {
//     setState({
//       ...state,
//       isAuth: false,
//       password: null
//     });
//   }

  return (
    <AuthContext.Provider value={{ state, handleSignUp }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
