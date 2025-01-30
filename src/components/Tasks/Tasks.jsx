function Tasks(props) {
    return props.tasks.length > 0 ? (
        <ul>
            {props.tasks.map(task => (
            
            <li key={task.id}>
              <input type="checkbox"
                checked={task.completed}
                onChange={(event) => props.handleCompletedChange(task, event.target.checked)} />
              
              <span>{task.name}</span>
              
              <div>
                <button disabled={task.completed} onClick={() => props.setInputValue(task)}>Edit</button>
                <button onClick={() => props.handleRemove(task)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
    ) : <p>There are no tasks in the list!</p>;
    
}

export default Tasks;