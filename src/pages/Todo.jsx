import Head from "../components/Head"
import TaskInput from "../components/TaskInput"
import DisplayTask from "../components/DisplayTask"

function Todo() {
  return (
    <div className="flex flex-col items-center">
      <Head />
      <div className=" bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
        <TaskInput />
        <DisplayTask />
      </div>
    </div>
  )
}

export default Todo
