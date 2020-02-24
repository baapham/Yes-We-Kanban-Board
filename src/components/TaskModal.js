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
    >
      <button onClick={props.closeModal}>close</button>
      <div>{props.title}</div>
      {error && <p>{error}</p>}
      <form>
        <input
          type="text"
          placeholder="Task Title"
          autoFocus
          value={taskTitle}
          onChange={onTaskTitleChange}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={taskDescription}
          onChange={onTaskDescriptionChange}
        />
        <button onClick={addTask}>{props.buttonText}</button>
      </form>
    </Modal>
  );
};

export default TaskModal;
