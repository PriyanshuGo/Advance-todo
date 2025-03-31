import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AuthGuard({ children }) {
  const navigate = useNavigate();
  const isUser = localStorage.getItem("token"); 

  useEffect(() => {
    if (!isUser) {
      navigate("/login");
    }
  }, []); 

  return isUser ? children : null; 
}

export default AuthGuard;
