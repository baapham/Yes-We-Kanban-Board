import React from 'react';
import { connect } from 'react-redux';
import { startRemoveProject } from '../actions/projects';

const ProjectItem = props => {
  return (
    <div>
      <h3>{props.project.title}</h3>
      <p>{props.project.description}</p>
      <button
        onClick={() => {
          props.dispatch(startRemoveProject(props.project));
        }}
      >
        Remove
        {process.env.FIREBASE_API_KEY}
      </button>
    </div>
  );
};

export default connect()(ProjectItem);
