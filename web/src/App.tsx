import { useEffect, useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm"
import { TaskList } from "./components/TaskList"

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const data = await response.json();
      setTasks(data.tasks || []);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  useEffect(() => {
    fetchTasks().then(() => {
      console.log("Tasks fetched successfully")
    })
  }, [])


  return (
    <>
      <AddTaskForm onSubmitSucess={fetchTasks} />
      <TaskList tasks={tasks} />
    </>
  )
}

export default App
