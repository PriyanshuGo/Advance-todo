import { useState, createContext } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("Task");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });  
  return <TaskContext.Provider value={{tasks,setTasks}}>{children}</TaskContext.Provider>;
};
