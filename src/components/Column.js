import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
const Column = props => {
  return (
    <div className="column-container">
      <h3 className="column-title">{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
        {provided => (
          <div
            className="column-list"
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
  );
};

export default Column;
