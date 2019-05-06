export default (state, name, payload) => ({
  ...state,
  ...{ [name]: { ...state[name], ...payload } },
});
