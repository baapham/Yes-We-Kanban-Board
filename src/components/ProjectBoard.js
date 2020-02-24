import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  startRemoveProject,
  startUpdateProject,
} from '../actions/projects';
import KanbanColumns from './KanbanColumns';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import ProjectForm from './ProjectForm';

const ProjectBoard = props => {
  const [addConfirmDeleteIsOpen, setConfirmDeleteIsOpen] = useState(
    false,
  );
  const [addEditTaskIsOpen, setEditTaskIsOpen] = useState(false);
  const openEditTaskModal = () => {
    setEditTaskIsOpen(true);
  };

  const closeEditTaskModal = () => {
    setEditTaskIsOpen(false);
  };
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
          <h3>{props.project.title}</h3>
          <p>{props.project.description}</p>
          <button onClick={openEditTaskModal}>Edit Project</button>
          <ProjectForm
            modalIsOpen={addEditTaskIsOpen}
            openModal={openEditTaskModal}
            closeModal={closeEditTaskModal}
            title={'Edit Project'}
            buttonText={'Edit'}
            project={props.project}
          />
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
