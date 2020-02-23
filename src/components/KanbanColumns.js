import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from './Column';

const KanbanColumns = props => {
  const [columns, setColumns] = useState(
    props.project.columns ? props.project.columns : {},
  );
  const [tasks, setTasks] = useState(
    props.project.tasks ? props.project.tasks : {},
  );
  const [columnOrder, setColumnOrder] = useState(
    props.project.columnOrder ? props.project.columnOrder : [],
  );
  const onProjectUpdate = project => {
    props.onProjectUpdate(project);
  };
  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    // if the item is dropped in the same place
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }
    // reodering of the columns
    if (type === 'column') {
      const newColumnOrder = Array.from(columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      setColumnOrder(newColumnOrder);
      onProjectUpdate({ columnOrder: newColumnOrder });
    }
    // reodering of the tasks inside columns
    else {
      const start = columns[source.droppableId];
      const finish = columns[destination.droppableId];
      let newColumns = {};
      // if the tasks are in the same column
      if (start === finish) {
        const newTaskIDs = Array.from(start.taskIDs);
        newTaskIDs.splice(source.index, 1);
        newTaskIDs.splice(destination.index, 0, draggableId);
        const newColumn = {
          ...start,
          taskIDs: newTaskIDs,
        };
        newColumns = {
          ...columns,
          [newColumn.id]: newColumn,
        };
      }
      // if the tasks are in separate columns
      else {
        const startTaskIDs = Array.from(start.taskIDs);
        startTaskIDs.splice(source.index, 1);
        const newStart = {
          ...start,
          taskIDs: startTaskIDs,
        };
        const finishTaskIDs = Array.from(finish.taskIDs);
        finishTaskIDs.splice(destination.index, 0, draggableId);
        const newFinish = {
          ...finish,
          taskIDs: finishTaskIDs,
        };
        newColumns = {
          ...columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        };
      }
      setColumns(newColumns);
      onProjectUpdate({ columns: newColumns });
    }
  };
  const addTask = task => {
    // console.log(task);
    // console.log(columns[task.columnID]['taskIDs']);
    let newTask = {
      title: task.title,
      description: task.description,
      id: task.id,
    };
    let newColumnTasks = [...columns[task.columnID]['taskIDs']];
    newColumnTasks.push(task.id);
    const newColumn = {
      ...columns[task.columnID],
      taskIDs: newColumnTasks,
    };
    const newColumns = {
      ...columns,
      [task.columnID]: newColumn,
    };
    const newTasks = { ...tasks, [task.id]: newTask };
    setColumns(newColumns);
    setTasks(newTasks);
    onProjectUpdate({ columns: newColumns, tasks: newTasks });
  };
  return (
    <div className="content-container">
      Columns
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {provided => (
            <div
              className="columns-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {columnOrder.map((columnID, index) => {
                const column = columns[columnID];
                if (!column.taskIDs) {
                  column.taskIDs = [];
                }
                const projTasks = column.taskIDs.map(
                  taskID => tasks[taskID],
                );
                return (
                  <Column
                    key={column.id}
                    column={column}
                    tasks={projTasks}
                    index={index}
                    onProjectUpdate={onProjectUpdate}
                    addTask={addTask}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
export default KanbanColumns;
