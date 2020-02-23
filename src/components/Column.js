import React, { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Modal from 'react-modal';
import Task from './Task';
import AddTaskModal from './AddTaskModal';

const Column = props => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const addTask = task => {
    const taskObj = { ...task, columnID: props.column.id };
    props.addTask(taskObj);
    // console.log(task);
    // let newColumnTasks = [...props.tasks];
    // newColumnTasks.push(task);
    // let newColumn = {}
    // console.log(newColumnTasks);
  };

  Modal.setAppElement('#root');

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
          <button className="add-task" onClick={openModal}>
            Add a Task
          </button>
          <AddTaskModal
            modalIsOpen={modalIsOpen}
            openModal={openModal}
            closeModal={closeModal}
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
                  <Task key={task.id} task={task} index={index} />
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
