type TaskListProps = {
  tasks: { id: number; title: string; completed: boolean }[];
}

export function TaskList({ tasks = [] }: TaskListProps) {


  return (
    <div>
      <h1>Task List</h1>

      <ul>
        {tasks.map((task) => (
          <li>
            <span>{task.title}</span>
            <span>{task.completed ? '🟢' : '🔴'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}