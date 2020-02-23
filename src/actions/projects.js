import database from '../firebase/firebase';
import moment from 'moment';

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
        'column-1': {
          id: 'column-1',
          title: 'To Do',
          taskIDs: ['task-1', 'task-4'],
        },
        'column-2': {
          id: 'column-2',
          title: 'In Progress',
          taskIDs: ['task-2', 'task-5'],
        },
        'column-3': {
          id: 'column-3',
          title: 'Done',
          taskIDs: ['task-3', 'task-6'],
        },
      },
      tasks = {
        'task-1': {
          id: 'task-1',
          title: 'Task for To Do column',
          description: 'This is some description',
        },
        'task-2': {
          id: 'task-2',
          title: 'Task for In Progress column',
          description: 'This is some description',
        },
        'task-3': {
          id: 'task-3',
          title: 'Task for Done column',
          description: 'This is some description',
        },
        'task-4': {
          id: 'task-4',
          title: 'Task 2 for To Do column',
          description: 'This is some description',
        },
        'task-5': {
          id: 'task-5',
          title: 'Task 2 for In Progress column',
          description: 'This is some description',
        },
        'task-6': {
          id: 'task-6',
          title: 'Task 2 for Done column',
          description: 'This is some description',
        },
      },
      columnOrder = ['column-1', 'column-2', 'column-3'],
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
