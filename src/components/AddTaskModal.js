import React, { useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
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
      //   let task = {};
      const taskID = uuid();
      //   task[taskID] = {};
      //   task[taskID]['id'] = taskID;
      //   task[taskID]['title'] = taskTitle;
      //   task[taskID]['description'] = taskDescription;
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
      contentLabel="Example Modal"
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

export default connect()(AddTaskModal);
