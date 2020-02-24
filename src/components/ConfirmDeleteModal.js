import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const ConfirmDeleteModal = props => {
  const removeItem = e => {
    e.preventDefault();
    props.confirmRemove(props.id);
    props.closeModal();
  };
  const cancelRemoveItem = () => {
    props.closeModal();
  };
  useEffect(() => {
    Modal.setAppElement('#root');
  });
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      contentLabel="Remove Confirmation"
    >
      <button onClick={props.closeModal}>close</button>
      <div>Are you sure you want to remove this {props.item}?</div>
      <form>
        <button onClick={removeItem}>Yes</button>
        <button onClick={cancelRemoveItem}>No</button>
      </form>
    </Modal>
  );
};

export default ConfirmDeleteModal;
