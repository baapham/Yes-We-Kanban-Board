const projectReducerDefaultState = [];

export default (state = projectReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [...state, action.project];
    case 'REMOVE_PROJECT':
      return state.filter(({ id }) => id !== action.id);
    case 'VIEW_PROJECT':
      return state.filter(({ id }) => id === action.id);
    default:
      return state;
  }
};
