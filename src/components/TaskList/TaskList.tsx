import type { TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

// Receives the full list of tasks and draws one TaskItem card per task
// It doesn't change anything itself; it passes the status and delete handlers down
export default function TaskList({
  tasks,
  onStatusChange,
  onDelete,
}: TaskListProps) {
  return (
    <ul>
      {/* Loop over every task and create a card for it. */}
      {/* key={task.id} gives React a unique label so it can track each card. */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
