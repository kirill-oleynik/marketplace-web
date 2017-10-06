import { errors } from 'app/reducers/sign_in';
import { FINISH, FAILURE, PAGE_LOAD, AUTH_SIGN_IN } from 'app/constants';

describe('#errors', () => {
  test('it has correct initial state', () => {
    expect(
      errors(undefined, {})
    ).toEqual({});
  });

  test('it handles AUTH_SIGN_IN_FAILURE', () => {
    const violations = Symbol('Violations');
    const state = errors(undefined, {
      type: AUTH_SIGN_IN + FAILURE,
      payload: {
        error: { violations }
      }
    });

    expect(state).toEqual(violations);
  });

  test('it handles PAGE_LOAD_FINISH action type', () => {
    const violations = Symbol('Violations');
    const state = errors({ violations }, {
      type: PAGE_LOAD + FINISH
    });

    expect(state).toEqual({});
  });
});
