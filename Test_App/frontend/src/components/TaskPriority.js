import React, { useState } from 'react';
import './TaskPriority.css';

function TaskPriority() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Math Homework', dueDate: '2023-12-01', priority: 'Medium' },
    { id: 2, name: 'Science Project', dueDate: '2023-11-20', priority: 'High' },
    { id: 3, name: 'History Essay', dueDate: '2023-11-25', priority: 'Low' },
  ]);

  const handlePriorityChange = (id, newPriority) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, priority: newPriority };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const sortedTasks = tasks.sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="task-priority-container">
      <header className="header">
        <div className="logo">Logo</div>
        <div className="title">Task Prioritization</div>
      </header>
      <nav className="navigation">
        <ul>
          <li>Home</li>
          <li>Tasks</li>
          <li>Calendar</li>
          <li>Settings</li>
        </ul>
      </nav>
      <main className="task-list">
        {sortedTasks.map(task => (
          <div key={task.id} className="task-row">
            <span className="task-name">{task.name}</span>
            <span className="task-due-date">{task.dueDate}</span>
            <select
              value={task.priority}
              onChange={(e) => handlePriorityChange(task.id, e.target.value)}
              className="priority-dropdown"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <button className="update-button">Update</button>
          </div>
        ))}
      </main>
      <footer className="footer">
        <div>Help & Support</div>
        <div>Privacy Policy</div>
        <div>Terms & Conditions</div>
        <div>© 2023</div>
      </footer>
    </div>
  );
}

export default TaskPriority;