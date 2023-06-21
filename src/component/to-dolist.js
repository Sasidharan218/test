import React, { useState } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [add, setAdd] = useState('');

  const handleAdd = () => {
    if (add !== '') {
      setTasks([...tasks, add]);
      setAdd('');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" value={add} onChange={(e) => setAdd(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map((task, id) => (
          <li key={id}>{task}</li>
        ))}
      </ul>
    </div>
  );
}


