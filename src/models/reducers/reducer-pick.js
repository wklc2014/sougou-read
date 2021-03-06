import ACTION_TYPES from '../action-types/index.js';

function func_loading(state, { payload }) {
  return { ...state, loading: payload };
}

function func_Data(state, { payload }) {
  return { ...state, ...payload };
}

export default (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.PICK_LOADING:
      return func_loading(state, action);

    case ACTION_TYPES.PICK_DATA:
      return func_Data(state, action);

    default:
      return state;
  }
}
