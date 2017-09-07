const reducer = require('../../app/reducers/profile').default;
const {
  PROFILE_UPDATE, FAILURE, PROFILE_MODAL_TOGGLE
} = require('../../app/constants');

describe('#modalIsActive', () => {
  test('it has correct initial state', () => {
    const nextState = reducer(undefined, {});
    expect(nextState.modalIsActive).toEqual(false);
  });

  test('it handles PROFILE_MODAL_TOGGLE action type', () => {
    const modalState = Symbol('modalState');
    const nextState = reducer(undefined, {
      type: PROFILE_MODAL_TOGGLE,
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

  test('it handles PROFILE_UPDATE_FAILURE action type', () => {
    const nextState = reducer(undefined, {
      type: PROFILE_UPDATE + FAILURE,
      payload: {
        error: {
          violations: 'Violations'
        }
      }
    });

    expect(nextState.errors).toEqual('Violations');
  });
});
