import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AuthGuard({ children }) {
  const navigate = useNavigate();
  const isUser = localStorage.getItem("token"); // Check if a user is authenticated by retrieving the token

  useEffect(() => {
    if (!isUser) {
      navigate("/login");     // If no user is found (no token), redirect to the login page
    }
  }, []); 

  return isUser ? children : null; 
}

export default AuthGuard;
