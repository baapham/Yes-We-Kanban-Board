import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import TaskModal from './TaskModal';

const Task = props => {
  const [addConfirmDeleteIsOpen, setConfirmDeleteIsOpen] = useState(
    false,
  );
  const [addEditTaskIsOpen, setEditTaskIsOpen] = useState(false);
  const openEditTaskModal = () => {
    setEditTaskIsOpen(true);
  };

  const closeEditTaskModal = () => {
    setEditTaskIsOpen(false);
  };
  const openConfirmDeleteModal = () => {
    setConfirmDeleteIsOpen(true);
  };

  const closeConfirmDeleteModal = () => {
    setConfirmDeleteIsOpen(false);
  };
  const removeTask = () => {
    props.removeTask(props.task.id);
  };
  const editTask = updates => {
    props.editTask(updates, props.task.id);
  };
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          className="task-container"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="task-items">
            <h5 className="task-title">{props.task.title}</h5>
            <div className="task-item-buttons">
              <button
                className="button-edit-small"
                onClick={openEditTaskModal}
              >
                &#9998;
              </button>
              <TaskModal
                modalIsOpen={addEditTaskIsOpen}
                openModal={openEditTaskModal}
                closeModal={closeEditTaskModal}
                title={'Edit Task'}
                buttonText={'Edit'}
                addTask={editTask}
                task={props.task}
              />
              <button
                className="button-remove-small"
                onClick={openConfirmDeleteModal}
              >
                -
              </button>
              <ConfirmDeleteModal
                modalIsOpen={addConfirmDeleteIsOpen}
                openModal={openConfirmDeleteModal}
                closeModal={closeConfirmDeleteModal}
                confirmRemove={removeTask}
                item={'task'}
              />
            </div>
            <p className="task-description">
              {props.task.description}
            </p>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
