import React from 'react';

const EditBoard = props => {
  console.log(props);
  return (
    <div>
      This is the edit board pages for {props.match.params.id}
    </div>
  );
};

export default EditBoard;
