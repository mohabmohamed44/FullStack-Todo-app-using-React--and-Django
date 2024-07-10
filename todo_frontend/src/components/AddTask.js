import React from "react";

const AddTask = ({ query, onInputChange, onPostTask }) => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="p-4 bg-white shadow rounded-3 max-w-md w-100">
        <h2 className="text-center mb-4">Add Task</h2>
        <div className="input-group">
          <input
            type="text"
            value={query}
            onChange={(e) => onInputChange(e.target.value)}
            className="form-control"
            placeholder="Enter task"
          />
          <button className="btn btn-success" onClick={onPostTask}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
