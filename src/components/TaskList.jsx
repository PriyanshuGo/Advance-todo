import { useContext } from "react";
import { TaskContext } from "../contextCreate/TaskContext";
import { CircleX } from "lucide-react";

function TaskList({ handleDeleteTask }) {
  // Access tasks and setTasks
  const { tasks } = useContext(TaskContext);

  // Priority sorting: High -> Medium -> Low
  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="my-10 space-y-6">
      {tasks.length > 0 && (
        <p className="text-2xl text-white font-semibold">
          Your Tasks ({tasks.length})
        </p>
      )}
      {sortedTasks.map((el, index) => (
        <div
          key={index}
          className="relative flex items-center p-4 bg-gray-800 rounded-lg transition-all hover:bg-gray-700/80 shadow-md"
        >
          {/* Task Text */}
          <span className="text-white text-lg">{el.text}</span>

          {/* Priority & Delete Button */}
          <div className="absolute top-2 right-2 flex items-center ">
            <span className="text-xs font-semibold px-2 py-1 rounded  text-white">
              {el.priority}
            </span>
            <CircleX
              onClick={() => handleDeleteTask(el, index)}
              className="cursor-pointer text-red-500 hover:text-red-700 transition-colors"
              size={24}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
