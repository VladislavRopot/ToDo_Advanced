import styles from './Tasks.module.css';

function Tasks(props) {
    return props.tasks.length > 0 ? (
        <ul className={styles.taskList}>
            {props.tasks.map(task => (
                <li key={task.id} className={styles.taskItem}>
                    <input 
                        type="checkbox"
                        checked={task.completed}
                        onChange={(event) => props.handleCompletedChange(task, event.target.checked)} 
                    />
                    <span className={styles.taskName}>{task.name}</span>
                    <div className={styles.taskActions}>
                        <button disabled={task.completed} onClick={() => props.setInputValue(task)}>Edit</button>
                        <button onClick={() => props.handleRemove(task)}>Remove</button>
                    </div>
                </li>
            ))}
        </ul>
    ) : <p>There are no tasks in the list!</p>;
}

export default Tasks;