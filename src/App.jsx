import { useState } from "react";
import TaskInput from "./components/TaskInput/TaskInput";
import Statuses from "./components/Statuses/Statuses";
import Tasks from "./components/Tasks/Tasks";
function App() {
  const defaultTaskValue = {
    id: null,
    name: '',
    completed: false,
  }
  const [inputValue, setInputValue] = useState(defaultTaskValue);
  const [tasks, setTasks] = useState([]);

  const [status, setStatus] = useState(null);
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
      < TaskInput inputValue={inputValue}
        setInputValue={setInputValue}
        handleSave={handleSave} />

      <div>
        < Statuses status={status}
          setStatus={setStatus} />
        <button onClick={() => handleClearAll()}>Clear all</button>
      </div>
      <div>
        <ul>
          <Tasks tasks={tasks.filter(task => {
            if (status === null) {
              return true;
            } else {
              return task.completed === status;
            }
          })}
            handleCompletedChange={handleCompletedChange}
            setInputValue={setInputValue}
            handleRemove={handleRemove}/>
        </ul>
      </div>
    </div>
  );
}

export default App;
