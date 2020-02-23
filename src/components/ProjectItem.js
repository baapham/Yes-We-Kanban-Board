import React from 'react';
import { connect } from 'react-redux';
import { startRemoveProject } from '../actions/projects';
import { Link } from 'react-router-dom';

const ProjectItem = props => {
  return (
    <Link to={`/project/${props.project.id}`}>
      <div>
        <h3>{props.project.title}</h3>
        <p>{props.project.description}</p>
      </div>
    </Link>
  );
};

export default connect()(ProjectItem);
