import React from 'react';
import { connect } from 'react-redux';
import Column from './Column';

const KanbanColumns = props => {
  return (
    <div>
      Columns
      {props.project.columnOrder.map(columnID => {
        const column = props.project.columns[columnID];
        const tasks = column.taskIDs.map(
          taskID => props.project.tasks[taskID],
        );
        return (
          <Column key={column.id} column={column} tasks={tasks} />
        );
      })}
    </div>
  );
};
export default KanbanColumns;
