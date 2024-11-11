import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css'; // Create this CSS file for styling

const projects = [
    { id: 1, title: 'Project One', path: '/project-one' },
    { id: 2, title: 'Project Two', path: '/project-two' },
    { id: 3, title: 'Project Three', path: '/project-three' },
];

const ProjectsPage = () => {
    return (
        <div className="projects-container">
            {projects.map((project) => (
                <Link to={project.path} key={project.id} className="project-tile">
                    <div className="project-content">
                        <h3>{project.title}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProjectsPage;