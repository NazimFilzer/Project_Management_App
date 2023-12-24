import { useState } from "react";

const Task = ({ tasks, onAdd, onDelete }) => {
    const [task, setTask] = useState('');

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleClick = () => {
        if(task.trim() === '') return;
        onAdd(task)
        setTask('');
    }

    return (
        <section id='task'>
            <h2>Tasks</h2>
            <input type="text" onChange={handleChange} value={task} />
            <button className='button-30' onClick={handleClick}>Add task</button>

            {tasks.length === 0 && <p> This Project Does not have any tasks yet</p>}
            {tasks.length > 0 &&
                <ul>
                    {tasks.map((task) => {
                        return <li key={task.id}>{task.text} <button className='button-30' id='clear-btn' onClick={() => onDelete(task.id)}>Clear</button></li>
                    })}
                </ul>}
        </section>
    );
}

export default Task;