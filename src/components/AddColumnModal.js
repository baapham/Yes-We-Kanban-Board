import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import uuid from 'uuid';

const AddTaskModal = props => {
  const [columnTitle, setColumnTitle] = useState('');
  const [error, setError] = useState('');

  const onColumnTitleChange = e => {
    const title = e.target.value;
    setColumnTitle(title);
  };
  const resetInputFields = () => {
    setColumnTitle('');
  };
  const addColumn = e => {
    e.preventDefault();
    if (!columnTitle) {
      setError('Please provide a title');
    } else {
      setError('');
      props.addColumn(columnTitle);
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
