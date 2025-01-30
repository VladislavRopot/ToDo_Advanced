function Statuses(props) {
    return (
        <ul>
          <li onClick={() => props.setStatus(null)}>All</li>
          <li onClick={() => props.setStatus(false)}>Pending</li>
          <li onClick={() => props.setStatus(true)}>Completed</li>
        </ul>
    );
}

export default Statuses;