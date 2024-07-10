import React from "react";

const AddTask = ({ query, onInputChange, onPostTask }) => {
  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.heading}>Add Task</h2>
        <div style={styles.inputGroup}>
          <input
            type="text"
            value={query}
            onChange={(e) => onInputChange(e.target.value)}
            style={styles.input}
            placeholder="Enter task"
          />
          <button style={styles.button} onClick={onPostTask}>
            Add Task
          </button>
        </div>
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
  formWrapper: {
    padding: "20px",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  inputGroup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: "45px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    paddingLeft: "10px",
    fontSize: "16px",
    marginRight: "10px",
  },
  button: {
    height: "45px",
    border: "1px solid #ccc",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "5px",
    padding: "0 20px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default AddTask;
