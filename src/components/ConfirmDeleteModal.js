import React, { useEffect } from 'react';
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
        <div>
          <h3 className="modal__title">
            Are you sure you want to remove this {props.item}?
          </h3>
          <form>
            <button
              className="button-confirm-small"
              onClick={removeItem}
            >
              Yes
            </button>
            <button
              className="button-remove-small"
              onClick={cancelRemoveItem}
            >
              No
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
