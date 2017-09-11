const { byId } = require('../../app/reducers/applications');
const {
  SUCCESS, CATEGORIES_FETCH, CATEGORIES_FETCH_ALL
} = require('./../../app/constants');

describe('#byId', () => {
  test('it has correct initial state', () => {
    const state = byId(undefined, {});

    expect(state).toEqual({});
  });

  test('it handles CATEGORIES_FETCH_SUCCESS', () => {
    const applicationId = Symbol('applicationId');
    const application = { id: applicationId };
    const category = { applications: [application] };

    const state = byId(undefined, {
      type: CATEGORIES_FETCH + SUCCESS,
      payload: { category }
    });

    expect(state).toEqual({
      [applicationId]: application
    });
  });

  test('it handles CATEGORIES_FETCH_ALL_SUCCESS', () => {
    const applicationId = Symbol('applicationId');
    const application = { id: applicationId };
    const category = { applications: [application] };

    const state = byId(undefined, {
      type: CATEGORIES_FETCH_ALL + SUCCESS,
      payload: {
        categories: [category]
      }
    });

    expect(state).toEqual({
      [applicationId]: application
    });
  });
});
