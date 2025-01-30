import styles from './Statuses.module.css';

function Statuses(props) {
    const { status, setStatus } = props;

    return (
        <ul>
            <li
                className={status === null ? styles.selected : ''}
                onClick={() => setStatus(null)}
            >
                All
            </li>
            <li
                className={status === false ? styles.selected : ''}
                onClick={() => setStatus(false)}
            >
                Pending
            </li>
            <li
                className={status === true ? styles.selected : ''}
                onClick={() => setStatus(true)}
            >
                Completed
            </li>
        </ul>
    );
}

export default Statuses;
