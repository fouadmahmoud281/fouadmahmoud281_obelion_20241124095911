import React, { useState } from 'react';
import './PriorityPage.css';

const PriorityPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Math Homework', dueDate: '2023-10-12', priority: 'Medium' },
    { id: 2, name: 'Science Project', dueDate: '2023-10-15', priority: 'High' },
    { id: 3, name: 'Literature Essay', dueDate: '2023-10-10', priority: 'Low' },
  ]);

  const handlePriorityChange = (event, taskId) => {
    const newPriority = event.target.value;
    setTasks(tasks.map(task => (
      task.id === taskId ? { ...task, priority: newPriority } : task
    )));
  };

  const sortedTasks = tasks.sort((a, b) => {
    const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="priority-page">
      <header>
        <div className="logo">App Logo</div>
        <h1>Task Prioritization</h1>
      </header>
      <nav>
        <ul>
          <li>Home</li>
          <li>Tasks</li>
          <li>Calendar</li>
          <li>Settings</li>
        </ul>
      </nav>
      <main>
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedTasks.map(task => (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.dueDate}</td>
                <td>
                  <select
                    value={task.priority}
                    onChange={(event) => handlePriorityChange(event, task.id)}
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </td>
                <td>
                  <button className="update-button">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer>
        <div>Help & Support</div>
        <div>&copy; 2023 Your Company</div>
        <div>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>
      </footer>
    </div>
  );
};

export default PriorityPage;