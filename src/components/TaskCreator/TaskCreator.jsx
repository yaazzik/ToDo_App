import React, { useState } from 'react';
import './TaskCreator.css';
import Input from '../Input/Input';

function TaskCreator({ setTasks }) {
  const [taskText, setTaskText] = useState('');

  const addTask = (event) => {
    event.preventDefault();
    if (taskText) {
      setTasks((prev) => [...prev, { id: Date.now(), name: taskText, completed: false }]);
      setTaskText('');
    }
  };

  return (
      <div className="TaskCreator">
          <Input
            className="taskInput"
            value={taskText}
            setTaskText={setTaskText}
          />
          <button
            type="button"
            className="addTaskBtn"
            onClick={addTask}
          >
              Добавить
          </button>
      </div>
  );
}

export default TaskCreator;
