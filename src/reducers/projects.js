const projectReducerDefaultState = [];

export default (state = projectReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [...state, action.project];
    case 'UPDATE_PROJECT':
      return state.map(project => {
        if (project.id === action.id) {
          return {
            ...project,
            ...action.updates,
          };
        } else {
          return project;
        }
      });
    case 'REMOVE_PROJECT':
      return state.filter(({ id }) => id !== action.id);
    case 'VIEW_PROJECT':
      return state.filter(({ id }) => id === action.id);
    case 'SET_PROJECTS':
      return action.projects;
    default:
      return state;
  }
};
