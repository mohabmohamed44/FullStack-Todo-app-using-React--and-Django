import React from "react";

const TaskView = ({ tasks, onDelete, onMarkCompleted }) => {
  return (
    <div style={styles.container}>
      <div style={styles.taskWrapper}>
        <h2 style={styles.heading}>Task List</h2>
        <ul style={styles.listGroup}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                ...styles.listGroupItem,
                backgroundColor: task.completed ? "#28a745" : "white",
                color: task.completed ? "white" : "black",
              }}
            >
              <span
                style={{
                  ...styles.taskText,
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.task}
              </span>
              <div style={styles.buttonGroup}>
                <button
                  style={
                    task.completed
                      ? styles.buttonSecondary
                      : styles.buttonPrimary
                  }
                  onClick={() => onMarkCompleted(task.id)}
                >
                  {task.completed ? "Completed" : "Mark Complete"}
                </button>
                <button
                  style={styles.buttonDanger}
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

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
  },
  taskWrapper: {
    padding: "20px",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "600px",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
  },
  listGroup: {
    padding: "0",
    listStyle: "none",
  },
  listGroupItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  taskText: {
    fontSize: "18px",
    flex: 1,
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
  },
  buttonPrimary: {
    padding: "5px 10px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  buttonSecondary: {
    padding: "5px 10px",
    borderRadius: "5px",
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  buttonDanger: {
    padding: "5px 10px",
    borderRadius: "5px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default TaskView;
