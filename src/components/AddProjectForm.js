import React, { useState } from 'react';
import moment from 'moment';
const AddProjectForm = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdAt, setCreatedAt] = useState(moment());
  const [error, setError] = useState('');
  const onTitleChange = e => {
    const title = e.target.value;
    setTitle(title);
  };
  const onDescriptionChange = e => {
    const description = e.target.value;
    setDescription(description);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (!title || !description) {
      setError('Please provide a title and/or description');
    } else {
      setError('');
      props.onSubmit({
        title,
        description,
        createdAt: createdAt.valueOf(),
      });
    }
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          autoFocus
          value={title}
          onChange={onTitleChange}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={onDescriptionChange}
        />
        <button>Create Project</button>
      </form>
    </div>
  );
};

export default AddProjectForm;
