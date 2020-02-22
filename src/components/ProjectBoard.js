import React from 'react';

const ProjectBoard = props => {
  console.log(props);
  return (
    <div>
      This is the project board pages for {props.match.params.id}
    </div>
  );
};

export default ProjectBoard;
