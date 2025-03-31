import { useState, useContext } from "react";
import { TaskContext } from "../contextCreate/TaskContext";

function TaskInput() {
  // Access tasks state and setTasks
  const { tasks, setTasks } = useContext(TaskContext);

  // Local state to manage user input for a task and its priority
  const [singleTask, setSingleTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTask = singleTask.trim(); // Remove extra spaces from task input

    // Ensure the task is not empty and doesn't already exist in the list
    if (
      trimmedTask.length > 0 &&
      !tasks.some((task) => task.text === trimmedTask)
    ) {
      const addedTask = [...tasks, { text: trimmedTask, priority }]; // Create new task object and update state
      localStorage.setItem("Task", JSON.stringify(addedTask)); // Save tasks to local storage
      setTasks(addedTask); // Update task state
      setSingleTask(""); // Clear input field after adding task
    }
  };

  return (
    <div className="flex justify-center w-full">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="text"
          value={singleTask}
          onChange={(e) => setSingleTask(e.target.value)}
          placeholder="Enter Task"
          className="px-4 py-3 rounded-lg bg-gray-700 text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex space-x-2">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="px-4 py-3 rounded-lg bg-gray-700 text-white w-3/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="High">🔥 High</option>
            <option value="Medium">⚡ Medium</option>
            <option value="Low">🌿 Low</option>
          </select>
          <button
            type="submit"
            className="px-5 py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg shadow-md w-1/4"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskInput;
