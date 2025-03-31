import { CircleCheck, CircleX, Trash2, Clock } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../contextCreate/TaskContext";
import TaskItem from "./TaskItem";

function DisplayTask() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(true); 
  
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("Task"));
    if (stored) {
      setTasks(stored);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  const handleTaskCompleted = (el) => {
    const updatedTasks = tasks.completedTask.includes(el)
      ? tasks.completedTask.filter((i) => i !== el)
      : [el, ...tasks.completedTask];

    const updateLocalStorage = { ...tasks, completedTask: updatedTasks };

    if (JSON.stringify(updatedTasks) !== JSON.stringify(tasks.completedTask)) {
      setTasks(updateLocalStorage);
      localStorage.setItem("Task", JSON.stringify(updateLocalStorage));
    }
  };

  const handleDeleteTask = (el) => {
    const updatedAllTasks = tasks.allTask.filter((element) => element !== el);
    const updatedCompletedTasks = tasks.completedTask.filter(
      (element) => element !== el
    );
    const updatedTask = {
      allTask: updatedAllTasks,
      completedTask: updatedCompletedTasks,
    };
    setTasks(updatedTask);
    localStorage.setItem("Task", JSON.stringify(updatedTask));
  };

  const handleClearAllTask = () => {
    setTasks({ allTask: [], completedTask: [] });
    setShowConfirm(false);
    localStorage.clear();
  };

  if (!tasks.allTask.length > 0) {
    return (
      <div className="text-center py-10 text-gray-400">
        <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <p className="text-lg">No tasks yet</p>
        <p className="text-sm">Add a task to get started</p>
      </div>
    );
  }

  return (
    <div>
      <TaskItem
        handleTaskCompleted={handleTaskCompleted}
        handleDeleteTask={handleDeleteTask}
      />
      {showConfirm ? (
        <div className="border border-red-600 bg-red-900/30 rounded-md px-8 py-4 text-white space-y-4">
          <p>Are you sure you want to delete all tasks?</p>
          <div className="flex justify-center space-x-2">
            <button
              className="cursor-pointer py-2 px-5 font-medium rounded-lg bg-red-500 hover:bg-red-600"
              onClick={handleClearAllTask}
            >
              Yes,delete all
            </button>
            <button
              className="cursor-pointer py-2 px-5 font-medium rounded-lg bg-gray-500 hover:bg-gray-600"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            onClick={() => setShowConfirm(showConfirm ? false : true)}
            className="bg-red-500 text-white font-bold w-full cursor-pointer flex justify-center items-center py-3 rounded-md hover:bg-red-600 space-x-2 "
          >
            {" "}
            <Trash2 />
            <span>Clear All Tasks</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default DisplayTask;
