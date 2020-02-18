import React from 'react';
import { connect } from 'react-redux';
import AddProjectForm from './AddProjectForm';
import { addProject } from '../actions/projects';
const CreateBoard = props => {
  return (
    <div>
      <AddProjectForm
        onSubmit={project => {
          props.dispatch(addProject(project));
          props.history.push('/');
        }}
      />
    </div>
  );
};

export default connect()(CreateBoard);
