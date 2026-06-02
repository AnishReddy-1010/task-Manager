import { useState, useEffect } from "react";
import "../index.css";

function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            title: "Learn React",
            completed: false,
          },
          {
            id: 2,
            title: "Build Portfolio",
            completed: true,
          },
        ];
  });

  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  // Add Task
  const addTask = () => {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  // Delete Task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(updatedTasks);
  };

  // Complete / Undo
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
          }
        : task
    );

    setTasks(updatedTasks);
  };

  // Start Editing
  const startEditing = (task) => {
    setEditingId(task.id);
    setEditingText(task.title);
  };

  // Save Edited Task
  const saveTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            title: editingText,
          }
        : task
    );

    setTasks(updatedTasks);
    setEditingId(null);
    setEditingText("");
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <div className="dashboard">

      {/* Header */}

      <div className="dashboard-header">

        <div>

          <h1>🚀 Task Manager</h1>

          <p>
            Organize your work and boost productivity
          </p>

        </div>

        <button
          className="logout-btn"
          onClick={() =>
            (window.location.href = "/")
          }
        >
          Logout
        </button>

      </div>

      {/* Statistics */}

      <div className="stats-grid">

        <div className="stat-card">

          <h2>{tasks.length}</h2>

          <p>Total Tasks</p>

        </div>

        <div className="stat-card">

          <h2>{completedTasks}</h2>

          <p>Completed</p>

        </div>

        <div className="stat-card">

          <h2>{pendingTasks}</h2>

          <p>Pending</p>

        </div>

      </div>

      {/* Add Task */}

      <div className="task-input-section">

        <input
          type="text"
          placeholder="Enter New Task"
          value={newTask}
          onChange={(e) =>
            setNewTask(e.target.value)
          }
        />

        <button
          className="add-task-btn"
          onClick={addTask}
        >
          + Add Task
        </button>

      </div>

      {/* Search */}

      <input
        className="search-bar"
        type="text"
        placeholder="🔍 Search Tasks..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      {/* Tasks */}

      <div className="tasks-container">

        {tasks
          .filter((task) =>
            task.title
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((task) => (
            <div
              className="task-card"
              key={task.id}
            >

              {editingId === task.id ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) =>
                    setEditingText(
                      e.target.value
                    )
                  }
                />
              ) : (
                <h3>{task.title}</h3>
              )}

              <p>
                Status:{" "}
                {task.completed
                  ? "Completed ✅"
                  : "Pending ⏳"}
              </p>

              <div className="task-buttons">

                {editingId === task.id ? (
                  <button
                    onClick={() =>
                      saveTask(task.id)
                    }
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      startEditing(task)
                    }
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() =>
                    toggleComplete(task.id)
                  }
                >
                  {task.completed
                    ? "Undo"
                    : "Complete"}
                </button>

                <button
                  onClick={() =>
                    deleteTask(task.id)
                  }
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

      </div>

    </div>
  );
}

export default Dashboard;