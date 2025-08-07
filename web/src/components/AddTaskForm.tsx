import { useState } from "react";

type AddTaskFormProps = {
  onSubmitSucess?: () => void;
}

export function AddTaskForm({ onSubmitSucess }: AddTaskFormProps) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value.trim());
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: taskTitle }),
      })

      onSubmitSucess && onSubmitSucess();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Task Form</h1>
      <input type="text" placeholder="Titulo da Tarefa" onChange={handleInputChange} value={taskTitle} />
      <button type="submit">Adiconar</button>
    </form>
  );
}