import React from 'react';

const ProjectItem = props => {
  return (
    <div>
      <h3>{props.project.title}</h3>
      <p>{props.project.description}</p>
    </div>
  );
};

export default ProjectItem;
