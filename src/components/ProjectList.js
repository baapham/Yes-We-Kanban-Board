import React, { useState } from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';
import ProjectForm from './ProjectForm';
const ProjectList = props => {
  const [addEditTaskIsOpen, setEditTaskIsOpen] = useState(false);
  const openEditTaskModal = () => {
    setEditTaskIsOpen(true);
  };

  const closeEditTaskModal = () => {
    setEditTaskIsOpen(false);
  };
  return (
    <div className="content-container">
      <div className="project-list">
        <div className="project-list-header">
          <h1>Project List</h1>
          <button onClick={openEditTaskModal} className="button-add">
            + Add a Project
          </button>
          <ProjectForm
            modalIsOpen={addEditTaskIsOpen}
            openModal={openEditTaskModal}
            closeModal={closeEditTaskModal}
            title={'Add a Project'}
            buttonText={'Add'}
          />
        </div>
        <div className="project-list-items">
          {props.projects.length === 0 ? (
            <p className="project-item-title">No projects</p>
          ) : (
            props.projects.map(project => {
              return (
                <ProjectItem key={project.id} project={project} />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.projects,
  };
};
export default connect(mapStateToProps)(ProjectList);
