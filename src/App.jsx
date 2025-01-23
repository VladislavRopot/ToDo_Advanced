
function App() {
  return (
    <div >
      <div>
        <input type="text" placeholder="Add a new task" />
        <button>Save</button>
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
          <li>
            <input type="checkbox" />
            <span>Task name</span>
            <div>
              <button>Edit</button>
              <button>Remove</button>
            </div>
          </li>

          <li>
            <input type="checkbox" />
            <span>Task name</span>
            <div>
              <button>Edit</button>
              <button>Remove</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
