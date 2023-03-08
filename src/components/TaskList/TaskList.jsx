import Task from '../Task/Task';
import './TaskList.css';

function TaskList(props) {
  const {
    tasks,
    setTasks,
  } = props;

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => id !== task.id));
  };

  const completeTask = (id) => {
    setTasks((prev) => prev.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    }));
  };

  return (
      <div className="TaskList">
          {tasks.map((task) => (
              <Task
                deleteTask={() => deleteTask(task.id)}
                completeTask={() => completeTask(task.id)}
                value={task.name}
                key={task.id}
                status={task.completed}
              />
          ))}
      </div>
  );
}

export default TaskList;
