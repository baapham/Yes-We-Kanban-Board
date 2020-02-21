import uuid from 'uuid';
import database from '../firebase/firebase';

export const addProject = project => ({
  type: 'ADD_PROJECT',
  project,
});

export const startAddProject = (projectData = {}) => {
  return dispatch => {
    const {
      title = '',
      description = '',
      createdAt = 0,
    } = projectData;
    const project = { title, description, createdAt };
    database
      .ref('projects')
      .push(project)
      .then(ref => {
        dispatch(addProject({ id: ref.key, ...project }));
      });
  };
};

export const removeProject = ({ id } = {}) => ({
  type: 'REMOVE_PROJECT',
  id,
});
