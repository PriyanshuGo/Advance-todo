import { Trash2, Clock } from "lucide-react";
import { useState, useContext } from "react";
import { TaskContext } from "../contextCreate/TaskContext";
import TaskList from "./TaskList";

function DisplayTask() {
  // Access tasks and setTasks
  const { tasks, setTasks } = useContext(TaskContext);

  const handleDeleteTask = (el) => {
    const updatedAllTasks = tasks.filter((element) => element !== el); // Remove selected task
    setTasks(updatedAllTasks); // Update state
    localStorage.setItem("Task", JSON.stringify(updatedAllTasks)); // Update local storage
  };

  // This function resets the task list and local storage
  const handleClearAllTask = () => {
    setTasks([]);
    setShowConfirm(false);
    localStorage.clear();
  };

  // If there are no tasks, display a placeholder message
  if (!tasks.length) {
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
      <TaskList handleDeleteTask={handleDeleteTask} />
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
