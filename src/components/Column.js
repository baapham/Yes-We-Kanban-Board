import React, { useState, useEffect } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Modal from 'react-modal';
import Task from './Task';
import AddTaskModal from './AddTaskModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';

const Column = props => {
  const [addTaskModalIsOpen, setAddTaskModalIsOpen] = useState(false);
  const [addConfirmDeleteIsOpen, setConfirmDeleteIsOpen] = useState(
    false,
  );
  const removeColumn = columnID => {
    props.removeColumn(columnID);
  };
  const openConfirmDeleteModal = () => {
    setConfirmDeleteIsOpen(true);
  };

  const closeConfirmDeleteModal = () => {
    setConfirmDeleteIsOpen(false);
  };

  const openAddTaskModal = () => {
    setAddTaskModalIsOpen(true);
  };

  const closeAddTaskModal = () => {
    setAddTaskModalIsOpen(false);
  };

  const addTask = task => {
    const taskObj = { ...task, columnID: props.column.id };
    props.addTask(taskObj);
  };

  const removeTask = taskID => {
    props.removeTask(taskID, props.column.id);
  };

  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {provided => (
        <div
          className="column-container"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <h3 className="column-title" {...provided.dragHandleProps}>
            {props.column.title}
          </h3>
          <button onClick={openConfirmDeleteModal}>
            Delete Column
          </button>
          <ConfirmDeleteModal
            modalIsOpen={addConfirmDeleteIsOpen}
            openModal={openConfirmDeleteModal}
            closeModal={closeConfirmDeleteModal}
            confirmRemove={removeColumn}
            id={props.column.id}
            item={'column'}
          />
          <button className="add-task" onClick={openAddTaskModal}>
            Add a Task
          </button>
          <AddTaskModal
            modalIsOpen={addTaskModalIsOpen}
            openModal={openAddTaskModal}
            closeModal={closeAddTaskModal}
            addTask={addTask}
          />
          <Droppable droppableId={props.column.id} type="task">
            {(provided, snapshot) => (
              <div
                className={
                  snapshot.isDraggingOver
                    ? 'column-list-dragging'
                    : 'column-list'
                }
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {props.tasks.map((task, index) => (
                  <Task
                    key={task.id}
                    task={task}
                    index={index}
                    removeTask={removeTask}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
