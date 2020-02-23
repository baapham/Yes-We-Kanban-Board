import React from 'react';
import { connect } from 'react-redux';
import {
  startRemoveProject,
  startUpdateProject,
} from '../actions/projects';
import KanbanColumns from './KanbanColumns';

const ProjectBoard = props => {
  const removeProject = () => {
    props.startRemoveProject({ id: props.project.id });
    props.history.push('/');
  };
  const onProjectUpdate = project => {
    props.startUpdateProject(props.project.id, project);
  };
  return (
    <div>
      {props.project === undefined ? (
        <p>This project does not exist or you cannot view it</p>
      ) : (
        <div>
          <p>
            This is the project board pages for {props.project.id}
          </p>
          <button onClick={removeProject}>Remove Project</button>
          <KanbanColumns
            project={props.project}
            onProjectUpdate={onProjectUpdate}
          />
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveProject: data => dispatch(startRemoveProject(data)),
  startUpdateProject: (id, project) =>
    dispatch(startUpdateProject(id, project)),
});

const mapStateToProps = (state, props) => {
  return {
    project: state.projects.find(
      project => project.id === props.match.params.id,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectBoard);
