import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur tempore adipisci explicabo perferendis perspiciatis odit dolor excepturi. Architecto rem nisi voluptatum nemo dicta dolore. Voluptatibus sunt earum non dicta consequatur!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By Me</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
