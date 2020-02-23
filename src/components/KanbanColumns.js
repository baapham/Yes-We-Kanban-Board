import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

const KanbanColumns = props => {
  const [columns, setColumns] = useState(
    props.project ? props.project.columns : {},
  );
  const [tasks, setTasks] = useState(
    props.project ? props.project.tasks : {},
  );
  const [columnOrder, setColumnOrder] = useState(
    props.project ? props.project.columnOrder : [],
  );
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const column = columns[source.droppableId];
    const newTaskIDs = Array.from(column.taskIDs);
    newTaskIDs.splice(source.index, 1);
    newTaskIDs.splice(destination.index, 0, draggableId);
    const newColumn = {
      ...column,
      taskIDs: newTaskIDs,
    };
    const newColumns = {
      ...columns,
      [newColumn.id]: newColumn,
    };
    setColumns(newColumns);
    props.onProjectUpdate({ columns: newColumns });
  };
  return (
    <div>
      Columns
      <DragDropContext onDragEnd={onDragEnd}>
        {columnOrder.map(columnID => {
          const column = columns[columnID];
          const projTasks = column.taskIDs.map(
            taskID => tasks[taskID],
          );
          return (
            <Column
              key={column.id}
              column={column}
              tasks={projTasks}
            />
          );
        })}
      </DragDropContext>
    </div>
  );
};
export default KanbanColumns;
