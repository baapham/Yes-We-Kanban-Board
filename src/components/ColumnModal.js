import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const ColumnModal = props => {
  const [columnTitle, setColumnTitle] = useState(
    props.column ? props.column.title : '',
  );
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
      if (!props.column) {
        resetInputFields();
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
      contentLabel="Column Modal"
    >
      <button onClick={props.closeModal}>close</button>
      <div>{props.title}</div>
      {error && <p>{error}</p>}
      <form>
        <input
          type="text"
          placeholder="Column Title"
          autoFocus
          value={columnTitle}
          onChange={onColumnTitleChange}
        />
        <button onClick={addColumn}>{props.buttonText}</button>
      </form>
    </Modal>
  );
};

export default ColumnModal;
