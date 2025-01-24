import { useState } from "react";

function App() {
  const defaultTaskValue = {
    id: null,
    name: '',
    completed: false,
  }
  const [inputValue, setInputValue] = useState(defaultTaskValue);
  const [tasks, setTasks] = useState([]);

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
  return (
    <div >
      <div>
        <input type="text"
          placeholder="Add a new task"
          value={inputValue.name}
          onInput={(event) => setInputValue({...inputValue, name: event.target.value})} />
        <button onClick={() => handleSave()}>Save</button>
      </div>

      <div>
        <ul>
          <li>All</li>
          <li>Pending</li>
          <li>Completed</li>
        </ul>
        <button>Clear all</button>
      </div>
      <div>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <input type="checkbox"
                checked={task.completed} />
              <span>{task.name}</span>
              <div>
                <button onClick={() => setInputValue(task)}>Edit</button>
                <button>Remove</button>
              </div>
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
