import { useContext } from "react";
import { TaskContext } from "../contextCreate/TaskContext";
import { CircleX } from "lucide-react";

function TaskList({ handleDeleteTask }) {
  const { tasks = [] } = useContext(TaskContext); // Ensure tasks is always an array

  return (
    <div className="my-10 space-y-6">
      {tasks.length > 0 && (
        <p className="text-2xl text-white font-semibold">
          Your Tasks ({tasks.length})
        </p>
      )}
      {tasks.map((el, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 bg-gray-800 rounded-lg transition-all hover:bg-gray-700/80 shadow-md"
        >
          <span className="text-white text-lg">{el}</span>
          <CircleX
            onClick={() => handleDeleteTask(el, index)}
            className="cursor-pointer text-red-500 hover:text-red-700 transition-colors"
            size={24}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
