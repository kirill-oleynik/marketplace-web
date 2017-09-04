const { createProfile } = require('./../../app/actions/profile_actions');
const { PROFILE_CREATE } = require('./../../app/constants');

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

// const moxios = require('moxios');
// const profileActions = require('../../app/actions/profile_actions');
// const profileConstants = require('../../app/constants/profile_constants');
//
// describe('#toggleProfileModal', () => {
//   let action,
//       state;
//
//   beforeEach(() => {
//     state = Symbol('state');
//     action = profileActions.toggleProfileModal(state);
//   });
//
//   test('it has PROFILE_MODAL_TOGGLE type', () => {
//     expect(action.type).toEqual(profileConstants.PROFILE_MODAL_TOGGLE);
//   });
//
//   test('it has state in payload', () => {
//     expect(action.modalState).toEqual(state);
//   });
// });
