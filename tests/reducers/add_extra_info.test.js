import { errors, inProgress } from 'app/reducers/add_extra_info';
import { FINISH, REQUEST, SUCCESS, FAILURE, PAGE_LOAD, PROFILE_CREATE } from 'app/constants';

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

  test('it handles PAGE_LOAD_FINISH', () => {
    const violations = Symbol('Violations');
    const state = errors({ violations }, {
      type: PAGE_LOAD + FINISH
    });

    expect(state).toEqual({});
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
