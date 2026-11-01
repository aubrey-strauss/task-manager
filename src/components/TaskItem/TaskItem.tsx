import type { TaskItemProps } from "../../types";

// write a component called TaskItem that shows the task’s title, description, priority, and due date
export default function TaskItem({
  task,
  onStatusChange,
  onDelete,
}: TaskItemProps) {
  return (
    <li className={`task-item ${task.status} ${task.priority}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p className="priority">Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
      <button onClick={() => onStatusChange(task.id, "pending")}>
        Pending
      </button>
      <button onClick={() => onStatusChange(task.id, "in-progress")}>
        In Progress
      </button>
      <button onClick={() => onStatusChange(task.id, "completed")}>
        Completed
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}
