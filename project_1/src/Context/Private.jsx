import { useContext } from "react";
// import { AuthContext } from "./AuthContext"
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { state } = useContext(AuthContext);

  if (state.email==="") {
    alert("SignUp first ")
    return <Navigate to="/signUp" />;
  }
  return children;
}
