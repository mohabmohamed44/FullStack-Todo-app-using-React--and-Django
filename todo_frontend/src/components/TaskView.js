import React, { useEffect } from "react";

const TaskView = ({ tasks, onDelete, onMarkCompleted }) => {
  useEffect(() => {
    console.log("Tasks:", tasks);
  }, [tasks]);

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="p-4 bg-white shadow rounded w-100 max-w-md">
        <h2 className="text-center mb-4">Task List</h2>
        <ul className="list-group">
          {tasks.length === 0 ? (
            <li className="list-group-item text-center">No tasks available</li>
          ) : (
            tasks.map((task) => (
              <li
                key={task.id}
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  task.completed ? "bg-success text-white" : ""
                }`}
              >
                <span
                  className={`h5 mb-0 ${
                    task.completed ? "text-decoration-line-through" : ""
                  }`}
                >
                  {task.task}
                </span>
                <div className="btn-group" role="group">
                  <button
                    className={`btn btn-${
                      task.completed ? "secondary" : "primary"
                    }`}
                    onClick={() => onMarkCompleted(task.id)}
                  >
                    {task.completed ? "Completed" : "Mark Complete"}
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default TaskView;
