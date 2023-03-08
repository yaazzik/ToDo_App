import { useState } from 'react';
import './Task.css';
import DeleteIcon from '../../assets/deleteIcon.svg';
import CheckIcon from '../../assets/checkIcon.svg';
import Input from '../Input/Input';

function Task(props) {
  const {
    value,
    deleteTask,
    completeTask,
    status,
  } = props;

  const [taskText, setTaskText] = useState(value);

  return (
      <form
        className="taskForm"
      >
          <Input
            setTaskText={setTaskText}
            value={taskText}
            status={status}
          />
          <img src={DeleteIcon} alt="Delete" className="icon" onClick={deleteTask} />
          <img src={CheckIcon} alt="Done" className="icon" onClick={completeTask} />
      </form>

  );
}

export default Task;
