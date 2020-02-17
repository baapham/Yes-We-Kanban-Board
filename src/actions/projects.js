import uuid from 'uuid';

export const addProject = ({
  title = '',
  description = '',
  createdAt = 0,
} = {}) => ({
  type: 'ADD_PROJECT',
  project: {
    id: uuid(),
    title,
    description,
    createdAt,
  },
});

export const removeProject = ({ id } = {}) => ({
  type: 'REMOVE_PROJECT',
  id,
});
