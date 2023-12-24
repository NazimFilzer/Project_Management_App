import NewProject from './components/NewProject.jsx';
import SideBar from './components/Sidebar.jsx';
import NoProject from './components/NoProject.jsx';
import { useState } from 'react';
import SelectedProject from './components/SelectedProject.jsx';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, // means no project
    projects: [],
    tasks: []
  });

  const handleAddTask = (task) => {
    setProjectState(prevState => {

      const newTask = {
        text: task,
        projectId: projectState.selectedProjectId,
        id: Math.random()
      }
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });

  }
  const handleDeleteTask = (id) => {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id)
      };
    });
  }

  const handleSelectedProject = (id) => {
    console.log('Clicked Projec');
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  const handleStartingProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null, // add new project
      };
    });
  };


  const handleAddProject = (project) => {
    setProjectState(prevState => {

      const newProject = {
        ...project,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedProjectId: newProject.id,
        projects: [...prevState.projects, newProject]
      };
    });

  }

  const handleCancelAddProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      };
    });
  }

  const handleDeleteProject = (id) => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== id)
      };
    });
  }

  const selectedId = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content =
    <SelectedProject
      project={selectedId}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />

  if (projectState.selectedProjectId === undefined) {
    content = <NoProject />
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  }

  return (
    <main className="container">
      <SideBar projects={projectState.projects}
        onAddProject={handleStartingProject}
        onSelectProject={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
