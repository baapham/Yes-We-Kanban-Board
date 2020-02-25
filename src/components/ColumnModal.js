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
            placeholder="Column Title"
            autoFocus
            value={columnTitle}
            onChange={onColumnTitleChange}
            className="modal-input"
          />
          <button
            className="button-confirm-small"
            onClick={addColumn}
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ColumnModal;
