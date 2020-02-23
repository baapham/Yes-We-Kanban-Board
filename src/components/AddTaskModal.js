import React, { useState } from 'react';
import Modal from 'react-modal';
import uuid from 'uuid';

const AddTaskModal = props => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [error, setError] = useState('');

  const onTaskTitleChange = e => {
    const title = e.target.value;
    setTaskTitle(title);
  };

  const onTaskDescriptionChange = e => {
    const description = e.target.value;
    setTaskDescription(description);
  };

  const addTask = e => {
    e.preventDefault();
    if (!taskTitle || !taskDescription) {
      setError('Please provide a title and/or description');
    } else {
      setError('');
      const taskID = uuid();
      props.addTask({
        id: taskID,
        title: taskTitle,
        description: taskDescription,
      });
      props.closeModal();
    }
  };

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      contentLabel="Add a task"
    >
      <button onClick={props.closeModal}>close</button>
      <div>Add a Task</div>
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
        <button onClick={addTask}>Create</button>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
