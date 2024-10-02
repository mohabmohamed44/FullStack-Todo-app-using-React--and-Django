import React, { useState, useEffect } from "react";
import axios from "./axios"; // Adjust path as needed
import AddTask from "./components/AddTask";
import TaskView from "./components/TaskView";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch tasks from the server
    const fetchTasks = async () => {
      try {
        const res = await axios.get("/tasks/");
        setAllTasks(res.data);
      } catch (err) {
        setError("Failed to fetch tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/tasks/delete/${id}/`);
      setAllTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (err) {
      setError("Failed to delete the task");
    }
  };

  const markCompleted = async (id) => {
    try {
      await axios.post(`/tasks/mark/${id}/`);
      setAllTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: true } : task
        )
      );
    } catch (err) {
      setError("Failed to mark the task as completed");
    }
  };

  const postTask = async () => {
    if (!query) return; // Prevent posting empty tasks

    try {
      const res = await axios.post("/tasks/", { task: query });
      setQuery("");
      setAllTasks((prevTasks) => [...prevTasks, res.data]);
    } catch (err) {
      setError("Failed to add the task");
    }
  };

  return (
    <div className="container mt-5"> {/* Added Bootstrap container with margin */}
      <h1 className="text-center mb-4">Task Manager</h1>
      {error && <div className="alert alert-danger">{error}</div>} {/* Error message */}
      {loading ? ( // Loading state
        <div className="text-center">Loading tasks...</div>
      ) : (
        <>
          <AddTask query={query} onInputChange={setQuery} onPostTask={postTask} />
          <TaskView
            tasks={allTasks}
            onDelete={handleDelete}
            onMarkCompleted={markCompleted}
          />
        </>
      )}
    </div>
  );
}

export default App;

