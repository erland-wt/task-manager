import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import useTasks from "./hooks/useTasks";


function App() {
  const { tasks, addTask, deleteTask, toggleTask, editTask } = useTasks();
  const [filter, setFilter] = useState("all");

  function handleChangeFilter(newFilter) {
    setFilter(newFilter);
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="app-container">
      <h1>Task Manager</h1>

      <TaskInput onAddTask={addTask} />

      <Filter currentFilter={filter} onChangeFilter={handleChangeFilter} />

      <TaskList
        tasks={filteredTasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
        onEditTask={editTask}
      />
    </div>
  );
}

export default App;
