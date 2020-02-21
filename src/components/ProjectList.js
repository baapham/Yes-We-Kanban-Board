import React from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';

const ProjectList = props => {
  return (
    <div>
      <h1>Project List</h1>
      {props.projects.map(project => {
        return <ProjectItem key={project.id} project={project} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.projects,
  };
};
export default connect(mapStateToProps)(ProjectList);
