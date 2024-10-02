import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskView = ({ tasks, onDelete, onMarkCompleted }) => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="p-4 bg-white shadow rounded" style={{ maxWidth: "600px", width: "100%" }}>
        <h2 className="mb-4 text-center">Task List</h2>
        <ul className="list-group">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                task.completed ? 'bg-success text-white' : ''
              }`}
            >
              <span
                className={`flex-grow-1 ${task.completed ? 'text-decoration-line-through' : ''}`}
              >
                {task.task}
              </span>
              <div className="btn-group" role="group" aria-label="Task actions">
                <button
                  className={`btn ${task.completed ? 'btn-secondary' : 'btn-primary'}`}
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
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskView;
