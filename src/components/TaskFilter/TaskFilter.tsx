import { useState } from "react";
import type { TaskFilterProps } from "../../types";
import type { TaskStatus } from "../../types";

// TaskFilter shows the status and priority dropdowns, remembers what’s picked,
// and sends both choices up to the parent with onFilterChange
export default function TaskFilter({ onFilterChange }: TaskFilterProps) {
  // each dropdown remembers its own choice; an empty string means All is picked
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  return (
    <div className="task-filter">
      <label>
        Status:
        <select
          value={status}
          // An empty choice means All, so we send undefined instead of an empty string to the parent
          onChange={(e) => {
            setStatus(e.target.value);
            //Each dropdown sends both filters, but each value gets its own line
            onFilterChange({
              status: (e.target.value || undefined) as TaskStatus | undefined,
              priority: (priority || undefined) as
                | "low"
                | "medium"
                | "high"
                | undefined,
            });
          }}
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <label>
        Priority:
        <select
          value={priority}
          //Same idea as status: send the new priority plus the current status, so neither filter gets lost
          onChange={(e) => {
            setPriority(e.target.value);
            onFilterChange({
              status: (status || undefined) as TaskStatus | undefined,
              priority: (e.target.value || undefined) as
                | "low"
                | "medium"
                | "high"
                | undefined,
            });
          }}
        >
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
    </div>
  );
}
