import '../index.css';
import React from 'react';

export default function SideBar({ onAddProject, projects, onSelectProject }) {


    return (
        <aside className="side-bar">
            <h2>
                Your Projects
            </h2>
            <div>
                <button className="button-30" role="button" onClick={onAddProject}>+ Add Project</button>
            </div>
            <ul>
                {projects.map((project) => {
                    return (
                        <li key={project.id}>
                            <button
                                onClick={() => onSelectProject(project.id)}
                            >
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}
