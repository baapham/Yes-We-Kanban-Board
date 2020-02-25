import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import {
  startAddProject,
  startUpdateProject,
} from '../actions/projects';

const ProjectForm = props => {
  const [title, setTitle] = useState(
    props.project ? props.project.title : '',
  );
  const [description, setDescription] = useState(
    props.project ? props.project.description : '',
  );
  const [createdAt] = useState(
    props.project ? props.project.createdAt : moment(),
  );
  const [error, setError] = useState('');
  const onTitleChange = e => {
    const title = e.target.value;
    setTitle(title);
  };
  const onDescriptionChange = e => {
    const description = e.target.value;
    setDescription(description);
  };
  const addProject = project => {
    props.dispatch(startAddProject(project));
  };
  const editProject = project => {
    props.dispatch(startUpdateProject(props.project.id, project));
  };
  const resetInputFields = () => {
    setTitle('');
    setDescription('');
  };
  const onSubmit = e => {
    e.preventDefault();
    if (!title || !description) {
      setError('Please provide a title and/or description');
    } else {
      setError('');
      if (!props.project) {
        addProject({
          title,
          description,
          createdAt: createdAt.valueOf(),
        });
      } else {
        editProject({
          title,
          description,
          createdAt: createdAt.valueOf(),
        });
      }
      resetInputFields();
      props.closeModal();
    }
  };
  useEffect(() => {
    Modal.setAppElement('#root');
  });
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      contentLabel="Project Modal"
      className="modal"
    >
      <div className="modal-content">
        <div className="modal-button-close">
          <button
            className="button-remove-small"
            onClick={props.closeModal}
          >
            x
          </button>
        </div>
        <h3 className="modal__title">{props.title}</h3>
        {error && <p className="error">{error}</p>}
        <form onSubmit={onSubmit}>
          <div className="modal-input-form">
            <input
              type="text"
              placeholder="Title"
              autoFocus
              value={title}
              onChange={onTitleChange}
              className="modal-input"
            />
            <textarea
              className="modal-input"
              type="text"
              placeholder="Description"
              value={description}
              onChange={onDescriptionChange}
            />
            <button className="button-confirm-small">
              {props.buttonText}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default connect()(ProjectForm);
