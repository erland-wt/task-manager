import { useState } from "react";

function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  const isDisabled = inputValue.trim() === "";

  function handleSubmit(e) {
    e.preventDefault();

    if (isDisabled) return;

    onAddTask(inputValue.trim());
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button type="submit" disabled={isDisabled}>
        Add
      </button>
    </form>
  );
}

export default TaskInput;
