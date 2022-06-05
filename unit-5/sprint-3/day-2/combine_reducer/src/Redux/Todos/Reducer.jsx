//2. reducers
import { todoActions } from '../Todos/Action';

const inistate = {
  laoding: false,
  todos: [],
  error: false,
};

export const todosReducer = (state = inistate, action) => {
  switch (action.type) {
    case todoActions.GET_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case todoActions.GET_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,

        todos: action.payload,
      };
    }
    case todoActions.GET_TODO_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
