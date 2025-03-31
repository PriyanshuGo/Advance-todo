import { useContext } from "react";
import { TaskContext } from "../contextCreate/TaskContext";
import { CircleCheck, CircleX } from "lucide-react";

function TaskItem({ handleTaskCompleted, handleDeleteTask }) {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="space-y-10 my-10">
      {tasks.allTask.length > 0 ? (
        <p className="text-2xl text-white">
          Your Tasks({tasks.allTask.length})
        </p>
      ) : null}
      {tasks.allTask
        ? tasks.allTask.map((el, index) => (
            <div
              key={index}
              className=" flex p-5 text-white bg-gray-800 rounded  space-x-4 transition-all hover:bg-gray-700/80"
            >
              <p
                className={`flex-1 ${
                  tasks.completedTask.includes(el)
                    ? "line-through text-gray-400"
                    : null
                }`}
              >
                {el}
              </p>
              <CircleCheck
                onClick={() => handleTaskCompleted(el)}
                className="cursor-pointer text-green-600"
              />
              <CircleX
                onClick={() => handleDeleteTask(el, index)}
                className="cursor-pointer text-red-600"
              />
            </div>
          ))
        : null}
    </div>
  );
}

export default TaskItem;
