const { errors, inProgress } = require('../../app/reducers/add_extra_info');
const {
  REQUEST, SUCCESS, FAILURE, PROFILE_CREATE
} = require('./../../app/constants');

describe('#errors', () => {
  test('it has correct initial state', () => {
    const state = errors(undefined, {});

    expect(state).toEqual({});
  });

  test('it handles PROFILE_CREATE_FAILURE', () => {
    const violations = Symbol('Violations');
    const state = errors(undefined, {
      type: PROFILE_CREATE + FAILURE,
      payload: {
        error: { violations }
      }
    });

    expect(state).toEqual(violations);
  });
});

describe('#inProgress', () => {
  test('it has correct initial state', () => {
    const state = inProgress(undefined, {});

    expect(state).toEqual(false);
  });

  test('it handles PROFILE_CREATE_REQUEST', () => {
    const state = inProgress(undefined, {
      type: PROFILE_CREATE + REQUEST
    });

    expect(state).toEqual(true);
  });

  test('it handles PROFILE_CREATE_SUCCESS', () => {
    const state = inProgress(undefined, {
      type: PROFILE_CREATE + SUCCESS
    });

    expect(state).toEqual(false);
  });

  test('it handles PROFILE_CREATE_FAILURE', () => {
    const state = inProgress(undefined, {
      type: PROFILE_CREATE + FAILURE
    });

    expect(state).toEqual(false);
  });
});
