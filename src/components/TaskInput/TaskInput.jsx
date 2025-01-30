import styles from './TaskInput.module.css';

function TaskInput(props) {
    return (
        <div className={styles.container}>
            <input 
                type="text"
                className={styles.input}
                placeholder="Add a new task"
                value={props.inputValue.name}
                onInput={(event) => props.setInputValue({ ...props.inputValue, name: event.target.value })} 
            />
            <button className={styles.button} onClick={() => props.handleSave()}>Save</button>
        </div>
    );
}

export default TaskInput;