import database from '../firebase/firebase';

export const addProject = project => ({
  type: 'ADD_PROJECT',
  project,
});

export const startAddProject = (projectData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      title = '',
      description = '',
      createdAt = 0,
      columns = {
        'to-do': {
          id: 'to-do',
          title: 'To Do',
          taskIDs: [],
        },
        'in-progress': {
          id: 'in-progress',
          title: 'In Progress',
          taskIDs: [],
        },
        done: {
          id: 'done',
          title: 'Done',
          taskIDs: [],
        },
      },
      tasks = {},
      columnOrder = ['to-do', 'in-progress', 'done'],
    } = projectData;
    const project = {
      title,
      description,
      createdAt,
      columns,
      tasks,
      columnOrder,
    };
    database
      .ref(`users/${uid}/projects`)
      .push(project)
      .then(ref => {
        dispatch(addProject({ id: ref.key, ...project }));
      });
  };
};

export const updateProject = (id, updates) => ({
  type: 'UPDATE_PROJECT',
  id,
  updates,
});

export const startUpdateProject = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/projects/${id}`)
      .update(updates)
      .then(() => {
        dispatch(updateProject(id, updates));
      });
  };
};

export const removeProject = ({ id } = {}) => ({
  type: 'REMOVE_PROJECT',
  id,
});

export const startRemoveProject = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/projects/${id}`)
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/projects`)
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
