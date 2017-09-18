const { ids, byId, appProfile } = require('../../app/reducers/applications');
const {
  SUCCESS, FAILURE, REQUEST, CATEGORIES_FETCH, CATEGORIES_FETCH_ALL, APPLICATION_FETCH,
  APPLICATIONS_ADD_TO_FAVORITES, APPLICATIONS_REMOVE_FROM_FAVORITES
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

describe('#appProfile', () => {
  test('it has correct initial state', () => {
    const state = appProfile(undefined, {});

    expect(state).toEqual({});
  });

  test('it handles APPLICATION_FETCH_SUCCESS', () => {
    const applicationData = Symbol('applicationData');
    const state = appProfile(undefined, {
      type: APPLICATION_FETCH + SUCCESS,
      payload: {
        application: applicationData
      }
    });

    expect(state).toEqual(applicationData);
  });

  test('it handles APPLICATIONS_ADD_TO_FAVORITES_REQUEST', () => {
    const state = appProfile(
      {
        id: 1
      },
      {
        type: APPLICATIONS_ADD_TO_FAVORITES + REQUEST
      }
    );

    expect(state).toEqual({
      id: 1,
      inProgress: true
    });
  });

  test('it handles APPLICATIONS_ADD_TO_FAVORITES_SUCCESS', () => {
    const favorite = Symbol('favorite');
    const state = appProfile(
      {
        id: 1,
        inProgress: true
      },
      {
        type: APPLICATIONS_ADD_TO_FAVORITES + SUCCESS,
        payload: {
          favorite
        }
      }
    );

    expect(state).toEqual({
      favorite,
      id: 1,
      inProgress: false
    });
  });

  test('it handles APPLICATIONS_ADD_TO_FAVORITES_FAILURE', () => {
    const state = appProfile(
      {
        id: 1,
        inProgress: true
      },
      {
        type: APPLICATIONS_ADD_TO_FAVORITES + FAILURE
      }
    );

    expect(state).toEqual({
      id: 1,
      inProgress: false
    });
  });

  test('it handles APPLICATIONS_REMOVE_FROM_FAVORITES_REQUEST', () => {
    const state = appProfile(
      {
        id: 1
      },
      {
        type: APPLICATIONS_REMOVE_FROM_FAVORITES + REQUEST
      }
    );

    expect(state).toEqual({
      id: 1,
      inProgress: true
    });
  });

  test('it handles APPLICATIONS_REMOVE_FROM_FAVORITES_SUCCESS', () => {
    const state = appProfile(
      {
        id: 1,
        favorite: {},
        inProgress: true
      },
      {
        type: APPLICATIONS_REMOVE_FROM_FAVORITES + SUCCESS
      }
    );

    expect(state).toEqual({
      id: 1,
      favorite: null,
      inProgress: false
    });
  });

  test('it handles APPLICATIONS_REMOVE_FROM_FAVORITES_FAILURE', () => {
    const state = appProfile(
      {
        id: 1,
        favorite: {},
        inProgress: true
      },
      {
        type: APPLICATIONS_REMOVE_FROM_FAVORITES + FAILURE
      }
    );

    expect(state).toEqual({
      id: 1,
      favorite: {},
      inProgress: false
    });
  });
});
