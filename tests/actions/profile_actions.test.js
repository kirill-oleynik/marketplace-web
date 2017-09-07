const {
  createProfile, toggleProfileModal, updateProfile
} = require('./../../app/actions/profile_actions');

const {
  PROFILE_CREATE, PROFILE_MODAL_TOGGLE, PROFILE_UPDATE
} = require('./../../app/constants');

describe('#createProfile', () => {
  test('it has PROFILE_CREATE type and passed data in payload', () => {
    const data = Symbol('data');
    const action = createProfile(data);

    expect(action).toEqual({
      type: PROFILE_CREATE,
      payload: { data }
    });
  });
});

describe('#toggleProfileModal', () => {
  test('it has PROFILE_MODAL_TOGGLE type and given payload', () => {
    const state = Symbol('state');
    const action = toggleProfileModal(state);

    expect(action).toEqual({
      type: PROFILE_MODAL_TOGGLE,
      payload: {
        modalState: state
      }
    });
  });
});

describe('#updateProfile', () => {
  test('it has PROFILE_UPDATE type and given id & payload', () => {
    const data = Symbol('data');
    const id = Symbol('id');
    const action = updateProfile(id, data);

    expect(action).toEqual({
      type: PROFILE_UPDATE,
      payload: { id, data }
    });
  });
});
