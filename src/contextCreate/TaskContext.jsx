import { useState, createContext } from "react";

// Create a context for managing tasks
export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("Task"); // Retrieve tasks from localStorage
    return savedTasks ? JSON.parse(savedTasks) : []; // Parse tasks if found, otherwise return an empty array
  });

  // Provide the tasks state and the function to update it to all components within the provider
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
