import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = props => {
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
        </div>
      )}
    </Draggable>
  );
};

export default Task;
