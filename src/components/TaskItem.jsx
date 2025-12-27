import { useState } from "react";

function TaskItem({ task, onDeleteTask, onToggleTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  function handleSave() {
    if (editValue.trim() === "") return;
    onEditTask(task.id, editValue.trim());
    setIsEditing(false);
  }

  return (
    <li className={task.completed ? "completed" : ""}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            autoFocus
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{task.title}</span>
          <button onClick={() => setIsEditing(true)} disabled={task.completed}>Edit</button>
        </>
      )}

        <button
            onClick={() => {
                const confirmed = window.confirm(
                "Are you sure you want to delete this task?"
                );
                if (confirmed) {
                onDeleteTask(task.id);
                }
            }}
            >
            Delete
        </button>
    </li>
  );
}

export default TaskItem;
