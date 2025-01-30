function TaskInput(props) {
    return (
        <div>
            <input type="text"
                placeholder="Add a new task"
                value={props.inputValue.name}
                onInput={(event) => props.setInputValue({ ...props.inputValue, name: event.target.value })} />
           
            <button onClick={() => props.handleSave()}>Save</button>
        </div>
    );
};

export default TaskInput;