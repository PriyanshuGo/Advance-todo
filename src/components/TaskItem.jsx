import { useEffect, useState } from "react";
import { fetchRelevantData } from "../utils/fetchData";  // Import fetchData functions

function TaskItem({ task }) {
  const [extraInfo, setExtraInfo] = useState("");  // To store the extra info (weather, news, etc.)

  // Fetch extra info (weather, news, or stock) when the task changes
  useEffect(() => {
    fetchRelevantData(task.text).then(setExtraInfo);
  }, [task.text]);

  return (
    <div className="task-item">
      <p>{task.text}</p>
      {extraInfo && <p className="extra-info">{extraInfo}</p>}  {/* Display the relevant info */}
    </div>
  );
}

export default TaskItem;
