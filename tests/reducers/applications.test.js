const { ids, byId } = require('../../app/reducers/applications');
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

describe('#ids', () => {
  test('it has correct initial state', () => {
    const state = ids(undefined, {});

    expect(state).toEqual(new Set());
  });

  test('it handles CATEGORIES_FETCH_SUCCESS', () => {
    const firstApllicationId = Symbol('firstApllicationId');
    const secondApllicationId = Symbol('secondApllicationId');

    const category = {
      id: 1, title: 'Test1', applications: [{ id: secondApllicationId }]
    };

    const state = ids([firstApllicationId], {
      type: CATEGORIES_FETCH + SUCCESS,
      payload: { category }
    });

    expect(state).toEqual(new Set([firstApllicationId, secondApllicationId]));
  });

  test('it handles CATEGORIES_FETCH_ALL_SUCCESS', () => {
    const firstApllicationId = Symbol('firstApllicationId');
    const secondApllicationId = Symbol('secondApllicationId');

    const categories = [
      { id: 1, title: 'Test1', applications: [{ id: firstApllicationId }] },
      { id: 2, title: 'Test2', applications: [{ id: secondApllicationId }] }
    ];

    const state = ids(undefined, {
      type: CATEGORIES_FETCH_ALL + SUCCESS,
      payload: { categories }
    });

    expect(state).toEqual(new Set([firstApllicationId, secondApllicationId]));
  });
});
