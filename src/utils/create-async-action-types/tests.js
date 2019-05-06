import createAsyncActionTypes from '.';

describe('utilities/createAsyncActionTypes', () => {
  it('Creates the object with three uppercased properties: request, success and failure', () => {
    expect(createAsyncActionTypes(null, 'remove')).to.deep.equal({
      REQUEST: 'REMOVE_REQUEST',
      SUCCESS: 'REMOVE_SUCCESS',
      FAILURE: 'REMOVE_FAILURE',
    });
  });

  it('Creates action types with namespace', () => {
    expect(createAsyncActionTypes('contacts', 'remove')).to.deep.equal({
      REQUEST: 'contacts/REMOVE_REQUEST',
      SUCCESS: 'contacts/REMOVE_SUCCESS',
      FAILURE: 'contacts/REMOVE_FAILURE',
    });
  });

  it('Creates action by provided camelcased type', () => {
    expect(createAsyncActionTypes('contacts', 'fetchAll')).to.deep.equal({
      REQUEST: 'contacts/FETCH_ALL_REQUEST',
      SUCCESS: 'contacts/FETCH_ALL_SUCCESS',
      FAILURE: 'contacts/FETCH_ALL_FAILURE',
    });
  });
});
