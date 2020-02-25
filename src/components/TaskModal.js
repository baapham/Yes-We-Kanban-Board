import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import uuid from 'uuid';

const TaskModal = props => {
  const [taskTitle, setTaskTitle] = useState(
    props.task ? props.task.title : '',
  );
  const [taskDescription, setTaskDescription] = useState(
    props.task ? props.task.description : '',
  );
  const [error, setError] = useState('');

  const onTaskTitleChange = e => {
    const title = e.target.value;
    setTaskTitle(title);
  };

  const onTaskDescriptionChange = e => {
    const description = e.target.value;
    setTaskDescription(description);
  };

  const resetInputFields = () => {
    setTaskTitle('');
    setTaskDescription('');
  };

  const addTask = e => {
    e.preventDefault();
    if (!taskTitle || !taskDescription) {
      setError('Please provide a title and/or description');
    } else {
      setError('');
      if (!props.task) {
        const taskID = uuid();
        props.addTask({
          id: taskID,
          title: taskTitle,
          description: taskDescription,
        });
        resetInputFields();
      } else {
        props.addTask({
          title: taskTitle,
          description: taskDescription,
        });
      }
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
      contentLabel="Task Modal"
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
        <form>
          <input
            type="text"
            placeholder="Task Title"
            autoFocus
            value={taskTitle}
            onChange={onTaskTitleChange}
            className="modal-input"
          />
          <input
            type="text"
            placeholder="Task Description"
            value={taskDescription}
            onChange={onTaskDescriptionChange}
            className="modal-input"
          />
          <button onClick={addTask} className="button-confirm-small">
            {props.buttonText}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default TaskModal;
