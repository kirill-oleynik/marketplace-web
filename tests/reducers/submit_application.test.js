const reducer = require('../../app/reducers/submit_application').default;

import {
  SUCCESS, FAILURE, REQUEST,
  SUBMIT_APPLICATION, SUBMIT_APPLICATION_MODAL_TOGGLE
} from '../../app/constants';

describe('#modalIsActive', () => {
  test('it has correct initial state', () => {
    const nextState = reducer(undefined, {});
    expect(nextState.modalIsActive).toEqual(false);
  });

  test('it handles SUBMIT_APPLICATION_MODAL_TOGGLE action type', () => {
    const modalState = Symbol('modalState');
    const nextState = reducer(undefined, {
      type: SUBMIT_APPLICATION_MODAL_TOGGLE,
      payload: { modalState }
    });

    expect(nextState.modalIsActive).toEqual(modalState);
  });
});

describe('#errors', () => {
  test('it has correct initial state', () => {
    const nextState = reducer(undefined, {});
    expect(nextState.errors).toEqual({});
  });

  test('it handles SUBMIT_APPLICATION_FAILURE action type', () => {
    const nextState = reducer(undefined, {
      type: SUBMIT_APPLICATION + FAILURE,
      payload: {
        error: {
          violations: 'Violations'
        }
      }
    });

    expect(nextState.errors).toEqual('Violations');
  });

  test('it handles SUBMIT_APPLICATION_MODAL_TOGGLE action type', () => {
    const nextState = reducer(undefined, {
      type: SUBMIT_APPLICATION_MODAL_TOGGLE,
      payload: {
        modalState: Symbol('any')
      }
    });

    expect(nextState.errors).toEqual({});
  });
});
