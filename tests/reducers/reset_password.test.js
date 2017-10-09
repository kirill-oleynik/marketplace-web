import { requestErrors, confirmErrors } from 'app/reducers/reset_password';
import {
  FINISH, FAILURE, PAGE_LOAD, RESET_PASSWORD_REQUEST, RESET_PASSWORD_CONFIRM
} from 'app/constants';

describe('#requestErrors', () => {
  test('it has correct initial state', () => {
    expect(
      requestErrors(undefined, {})
    ).toEqual({});
  });

  test('it handles RESET_PASSWORD_REQUEST_FAILURE action type', () => {
    const violations = Symbol('Violations');
    const state = requestErrors(undefined, {
      type: RESET_PASSWORD_REQUEST + FAILURE,
      payload: {
        error: { violations }
      }
    });

    expect(state).toEqual(violations);
  });

  test('it handles PAGE_LOAD_FINISH action type', () => {
    const violations = Symbol('Violations');
    const state = requestErrors({ violations }, {
      type: PAGE_LOAD + FINISH
    });

    expect(state).toEqual({});
  });
});

describe('#confirmErrors', () => {
  test('it has correct initial state', () => {
    expect(
      confirmErrors(undefined, {})
    ).toEqual({});
  });

  test('it handles RESET_PASSWORD_CONFIRM_FAILURE action type', () => {
    const violations = Symbol('Violations');
    const state = confirmErrors(undefined, {
      type: RESET_PASSWORD_CONFIRM + FAILURE,
      payload: {
        error: { violations }
      }
    });

    expect(state).toEqual(violations);
  });

  test('it handles PAGE_LOAD_FINISH action type', () => {
    const violations = Symbol('Violations');
    const state = confirmErrors({ violations }, {
      type: PAGE_LOAD + FINISH
    });

    expect(state).toEqual({});
  });
});
