import { useState, createContext } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState({
      allTask:[],
      completedTask:[]
    });
  
  return <TaskContext.Provider value={{tasks,setTasks}}>{children}</TaskContext.Provider>;
};
