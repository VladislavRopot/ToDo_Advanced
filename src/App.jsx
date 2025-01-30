import { useState } from "react";

function App() {
  const defaultTaskValue = {
    id: null,
    name: '',
    completed: false,
  }
  const [inputValue, setInputValue] = useState(defaultTaskValue);
  const [tasks, setTasks] = useState([]);

  const [status, setStatus] = useState(null );
  const handleSave = () => {
    if (inputValue.id === null) {
      inputValue.id = tasks.length + 1;

      setTasks([...tasks, inputValue]);
    } else {
      const index = tasks.findIndex(item => item.id === inputValue.id);
      if (index !== -1) {
        tasks[index] = inputValue;
      }

      setTasks([...tasks]);
    }

    setInputValue(defaultTaskValue);
  };

  const handleRemove = (task) => {
    setTasks([...tasks.filter(item => item.id !== task.id)]);
  };

  const handleCompletedChange = (task, checked) => {

    const index = tasks.findIndex(item => item.id === task.id);
    if (index !== -1) {
      tasks[index] = { ...task, completed: checked };
    }

    setTasks([...tasks]);
  };

  const handleClearAll = () => {
    setTasks([]);
    setInputValue(defaultTaskValue);
  };

  return (
    <div >
      <div>
        <input type="text"
          placeholder="Add a new task"
          value={inputValue.name}
          onInput={(event) => setInputValue({ ...inputValue, name: event.target.value })} />
        <button onClick={() => handleSave()}>Save</button>
      </div>

      <div>
        <ul>
          <li onClick={() => setStatus(null)}>All</li>
          <li onClick={() => setStatus(false)}>Pending</li>
          <li onClick={() => setStatus(true)}>Completed</li>
        </ul>
        <button onClick={() => handleClearAll()}>Clear all</button>
      </div>
      <div>
        <ul>
          {tasks.filter(task => {
            if (status === null) {
              return true;
            } else {
              return task.completed === status;
            }
          }).map(task => (
            <li key={task.id}>
              <input type="checkbox"
                checked={task.completed}
                onChange={(event) => handleCompletedChange(task, event.target.checked)} />
              <span>{task.name}</span>
              <div>
                <button onClick={() => setInputValue(task)}>Edit</button>
                <button onClick={() => handleRemove(task)}>Remove</button>
              </div>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
}

export default App;
