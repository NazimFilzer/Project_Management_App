import '../index.css'
import Task from './Task';

const SelectedProject = ({ project, onDeleteProject,onAddTask,onDeleteTask,tasks }) => {
    console.log('Inside Selected Project', project);
    return (
        <div className="new-project">
            <header >
                <div className="title">
                    <h1>{project.title}</h1>
                    <button className='button-30' id='delete-btn' onClick={() => onDeleteProject(project.id)}>Delete</button>
                </div>
                <p id='due-date'>{project.dueDate}</p>
                <p>{project.description}</p>
            </header>
            <div>
            <hr />
            <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />

            </div>
        </div>

    );
}

export default SelectedProject;