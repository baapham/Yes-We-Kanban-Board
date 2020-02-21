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

export const startRemoveProject = ({ id } = {}) => {
  return dispatch => {
    return database
      .ref(`projects/${id}`)
      .remove()
      .then(() => {
        dispatch(removeProject({ id }));
      });
  };
};

export const setProjects = projects => ({
  type: 'SET_PROJECTS',
  projects,
});

export const startSetProjects = () => {
  return dispatch => {
    return database
      .ref('projects')
      .once('value')
      .then(snapshot => {
        const projects = [];
        snapshot.forEach(childSnapshot => {
          projects.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setProjects(projects));
      });
  };
};
