# Task Manager

A task management app built with React and TypeScript. It shows a list of tasks, lets you change each task's status or delete it, and filters the list by status and priority. Each task's look changes based on its status and priority.

## How to Run

```
npm install
npm run dev
```

Then open the `localhost` link shown in the terminal.

## Features

- Change a task's status with the **Pending**, **In Progress**, and **Completed** buttons
- Delete a task with the **Delete** button
- Filter tasks by **status** and **priority** with the dropdowns (choose "All" to show everything)
- Background color changes by status: pending (pink), in progress (yellow), completed (green)
- Priority text changes color: high (red), medium (gold), low (green)
- Hover and active (pressed) effects on buttons and dropdowns

## Project Structure

```
src/
  components/
    TaskList/TaskList.tsx
    TaskItem/TaskItem.tsx
    TaskFilter/TaskFilter.tsx
  types/index.ts
  App.tsx
  App.css
```

## Components

### TaskList

Receives the list of tasks and draws one `TaskItem` card for each one, using `task.id` as the key.

| Prop             | Type                          | Description                            |
| ---------------- | ----------------------------- | -------------------------------------- |
| `tasks`          | `Task[]`                      | The tasks to show                      |
| `onStatusChange` | `(taskId, newStatus) => void` | Called when a status button is clicked |
| `onDelete`       | `(taskId) => void`            | Called when Delete is clicked          |

### TaskItem

Shows one task: its title, description, priority, due date, status buttons, and Delete button. Its CSS classes are built from the task's status and priority so it can be styled differently.

| Prop             | Type                          | Description                           |
| ---------------- | ----------------------------- | ------------------------------------- |
| `task`           | `Task`                        | The task to show                      |
| `onStatusChange` | `(taskId, newStatus) => void` | Sends the new status up to the parent |
| `onDelete`       | `(taskId) => void`            | Tells the parent to delete this task  |

### TaskFilter

Shows the status and priority dropdowns. It remembers what's picked and sends both choices up to the parent. Choosing "All" sends `undefined`, which means "don't filter by this."

| Prop             | Type                                        | Description                        |
| ---------------- | ------------------------------------------- | ---------------------------------- |
| `onFilterChange` | `(filters: { status?, priority? }) => void` | Called whenever a dropdown changes |

## Example Usage

`App.tsx` holds the tasks and filters in state and passes them down:

```tsx
const [tasks, setTasks] = useState<Task[]>(sampleTasks);
const [filters, setFilters] = useState<{
  status?: TaskStatus;
  priority?: "low" | "medium" | "high";
}>({});

const filteredTasks = tasks.filter((task) => {
  const statusMatch = filters.status ? task.status === filters.status : true;
  const priorityMatch = filters.priority
    ? task.priority === filters.priority
    : true;
  return statusMatch && priorityMatch;
});

return (
  <div className="app">
    <h1>Task Manager</h1>
    <TaskFilter onFilterChange={setFilters} />
    <TaskList
      tasks={filteredTasks}
      onStatusChange={handleStatusChange}
      onDelete={handleDelete}
    />
  </div>
);
```

## Credits

- Built for Per Scholas SE 415, Lab 3: Lists, Keys, and Conditionals
- Used Claude (AI assistant by Anthropic) for step-by-step guidance, explanations, and code review
- Project set up with [Vite](https://vite.dev)
