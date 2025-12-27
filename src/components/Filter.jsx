function Filter({ currentFilter, onChangeFilter }) {
  return (
    <div>
      <button
        onClick={() => onChangeFilter("all")}
        disabled={currentFilter === "all"}
      >
        All
      </button>

      <button
        onClick={() => onChangeFilter("active")}
        disabled={currentFilter === "active"}
      >
        Active
      </button>

      <button
        onClick={() => onChangeFilter("completed")}
        disabled={currentFilter === "completed"}
      >
        Completed
      </button>
    </div>
  );
}

export default Filter;
