import TaskInput from "../components/TaskInput";
import DisplayTask from "../components/DisplayTask";
import { useNavigate } from "react-router-dom";

function Todo() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove authentication token
    navigate("/login"); // Redirect to login
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-6">
      <div className="w-full max-w-2xl flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Your To-Do List</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white cursor-pointer bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-lg shadow-md"
        >
          Logout
        </button>
      </div>
      <div className="w-full max-w-2xl bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
        <TaskInput />
        <DisplayTask />
      </div>
    </div>
  );
}

export default Todo;
