import React, { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import TaskModal from './TaskModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import ColumnModal from './ColumnModal';

const Column = props => {
  const [addTaskModalIsOpen, setAddTaskModalIsOpen] = useState(false);
  const [addConfirmDeleteIsOpen, setConfirmDeleteIsOpen] = useState(
    false,
  );
  const [addEditColumnIsOpen, setEditColumnIsOpen] = useState(false);
  const removeColumn = columnID => {
    props.removeColumn(columnID);
  };
  const openConfirmDeleteModal = () => {
    setConfirmDeleteIsOpen(true);
  };

  const closeConfirmDeleteModal = () => {
    setConfirmDeleteIsOpen(false);
  };
  const openEditColumnModal = () => {
    setEditColumnIsOpen(true);
  };

  const closeEditColumnModal = () => {
    setEditColumnIsOpen(false);
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

  const editTask = (updates, editTaskID) => {
    props.editTask(updates, editTaskID);
  };

  const removeTask = taskID => {
    props.removeTask(taskID, props.column.id);
  };

  const editColumn = updates => {
    props.editColumn(updates, props.column.id);
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
          <div className="buttons-column">
            <button
              className="button-add-small"
              onClick={openAddTaskModal}
            >
              +
            </button>
            <TaskModal
              modalIsOpen={addTaskModalIsOpen}
              openModal={openAddTaskModal}
              closeModal={closeAddTaskModal}
              addTask={addTask}
              title={'Add a task'}
              buttonText={'Create'}
            />
            <button
              onClick={openEditColumnModal}
              className="button-edit-small"
            >
              &#9998;
            </button>
            <ColumnModal
              modalIsOpen={addEditColumnIsOpen}
              openModal={openEditColumnModal}
              closeModal={closeEditColumnModal}
              addColumn={editColumn}
              column={props.column}
              title={'Edit column'}
              buttonText={'Edit'}
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
              confirmRemove={removeColumn}
              id={props.column.id}
              item={'column'}
            />
          </div>
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
                    editTask={editTask}
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
