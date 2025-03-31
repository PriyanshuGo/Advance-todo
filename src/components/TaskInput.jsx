import { useState, useContext } from "react";
import { TaskContext } from "../contextCreate/TaskContext";

function TaskInput() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [singleTask, setSingleTask] = useState("");

  const AddNewTask = () => {
    const trimedTask = singleTask.trim();
    if (trimedTask.length > 0 && !tasks.includes(trimedTask)) {
      const addedTask = [singleTask,...tasks];
      localStorage.setItem("Task", JSON.stringify(addedTask));
      setTasks(addedTask);
      setSingleTask("");
    }
  };

  return (
    <div className="flex justify-center ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="-space-x-3 flex items-center"
      >
        <input
          type="text"
          value={singleTask}
          onChange={(e) => setSingleTask(e.target.value)}
          className="border-2 border-black rounded-2xl p-2 pr-5 bg-white h-full focus:outline-none placeholder:text-gray-500"
          placeholder="What needs to be done?"
        />
        <button
          className="bg-blue-600 text-white border-black border-1 rounded-r-2xl py-3 px-4 cursor-pointer"
          onClick={AddNewTask}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskInput;
