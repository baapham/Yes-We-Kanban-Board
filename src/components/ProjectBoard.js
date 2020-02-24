import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  startRemoveProject,
  startUpdateProject,
} from '../actions/projects';
import KanbanColumns from './KanbanColumns';
import ConfirmDeleteModal from './ConfirmDeleteModal';

const ProjectBoard = props => {
  const [addConfirmDeleteIsOpen, setConfirmDeleteIsOpen] = useState(
    false,
  );
  const removeProject = projectID => {
    props.startRemoveProject({ id: projectID });
    props.history.push('/');
  };
  const onProjectUpdate = project => {
    props.startUpdateProject(props.project.id, project);
  };
  const openConfirmDeleteModal = () => {
    setConfirmDeleteIsOpen(true);
  };

  const closeConfirmDeleteModal = () => {
    setConfirmDeleteIsOpen(false);
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
          <button onClick={openConfirmDeleteModal}>
            Remove Project
          </button>
          <ConfirmDeleteModal
            modalIsOpen={addConfirmDeleteIsOpen}
            openModal={openConfirmDeleteModal}
            closeModal={closeConfirmDeleteModal}
            confirmRemove={removeProject}
            id={props.project.id}
            item={'project'}
          />
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
