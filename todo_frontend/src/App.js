import React, { useState, useEffect } from "react";
import axios from "./axios"; // Adjust path as needed
import AddTask from "./components/AddTask";
import TaskView from "./components/TaskView";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("/tasks/").then((res) => setAllTasks(res.data));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/tasks/delete/${id}/`).then(() => {
      setAllTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    });
  };

  const markCompleted = (id) => {
    axios.post(`/tasks/mark/${id}/`).then(() => {
      setAllTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: true } : task
        )
      );
    });
  };

  const postTask = () => {
    axios.post("/tasks/", { task: query }).then((res) => {
      setQuery("");
      setAllTasks((prevTasks) => [...prevTasks, res.data]);
    });
  };

  return (
    <div>
      <AddTask query={query} onInputChange={setQuery} onPostTask={postTask} />
      <TaskView
        tasks={allTasks}
        onDelete={handleDelete}
        onMarkCompleted={markCompleted}
      />
    </div>
  );
}

export default App;
