import React, { useState } from 'react';
import Modal from 'react-modal';
import uuid from 'uuid';

const AddTaskModal = props => {
  const [columnTitle, setColumnTitle] = useState('');
  const [error, setError] = useState('');

  const onColumnTitleChange = e => {
    const title = e.target.value;
    setColumnTitle(title);
  };

  const addColumn = e => {
    e.preventDefault();
    if (!columnTitle) {
      setError('Please provide a title');
    } else {
      setError('');
      props.addColumn(columnTitle);
      //   props.addTask({
      //     id: taskID,
      //     title: taskTitle,
      //     description: taskDescription,
      //   });
      props.closeModal();
    }
  };

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      contentLabel="Add a column"
    >
      <button onClick={props.closeModal}>close</button>
      <div>Add a Column</div>
      {error && <p>{error}</p>}
      <form>
        <input
          type="text"
          placeholder="Column Title"
          autoFocus
          value={columnTitle}
          onChange={onColumnTitleChange}
        />
        <button onClick={addColumn}>Create</button>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
