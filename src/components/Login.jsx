import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [error, setError] = useState(""); 

  const navigate = useNavigate();

  const baseURl = "https://reqres.in"
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 
    console.log("🔑 Attempting login ");

    try {
        const res = await axios.post(`${baseURl}/api/login`,{email,password})
        console.log("✅ Login successful! Token:");
        localStorage.setItem("token",res.data.token);
        navigate("/")
    } catch (error) {
      setError("Invalid email or password. Please try again.");
      console.log("Error during login:", error);
    }
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>} {/* Show error message */}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-3"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-3"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 py-2 rounded cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;