import './App.css';
import { useState } from 'react';
import TaskList from './TaskList/TaskList';
import TaskCreator from './TaskCreator/TaskCreator';

function App() {
  const initialTasks = [
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: false },
    { id: 3, name: 'Task 3', completed: false }];

  const [tasks, setTasks] = useState(initialTasks);

  return (
      <div className="App" style={tasks.length > 9 ? { height: '100%' } : { height: '100vh' }}>
          <TaskCreator tasks={tasks} setTasks={setTasks} />
          <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
  );
}

export default App;
