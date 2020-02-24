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
          className={
            snapshot.isDragging
              ? 'task-container-dragging'
              : 'task-container'
          }
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="drag-handler" {...provided.dragHandleProps}>
            &#9776;
          </div>
          <h5>{props.task.title}</h5>
          <p>{props.task.description}</p>
          <button onClick={openEditTaskModal}>Edit</button>
          <TaskModal
            modalIsOpen={addEditTaskIsOpen}
            openModal={openEditTaskModal}
            closeModal={closeEditTaskModal}
            title={'Edit Task'}
            buttonText={'Edit'}
            addTask={editTask}
            task={props.task}
          />
          <button onClick={openConfirmDeleteModal}>
            Delete Task
          </button>
          <ConfirmDeleteModal
            modalIsOpen={addConfirmDeleteIsOpen}
            openModal={openConfirmDeleteModal}
            closeModal={closeConfirmDeleteModal}
            confirmRemove={removeTask}
            item={'task'}
          />
        </div>
      )}
    </Draggable>
  );
};

export default Task;
