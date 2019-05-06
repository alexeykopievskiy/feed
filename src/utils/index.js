export createAction from './create-action';
export createAsyncActionTypes from './create-async-action-types';
export createReducer from './create-reducer';
export getErrorType from './get-error-type';
export nextState from './next-state';
export nextStatePart from './next-state-part';

function isServer() {
  return !(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}

export { isServer };
