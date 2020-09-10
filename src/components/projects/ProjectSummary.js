import React from 'react';

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-4 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by Me</p>
                <p className="grey-text">3rd September, 2am</p>
            </div>
        </div>)
}

export default ProjectSummary;