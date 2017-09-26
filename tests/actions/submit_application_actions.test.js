const {
  submitApplication, toggleSubmitApplicationModal
} = require('./../../app/actions/submit_application_actions');

const {
  SUBMIT_APPLICATION,
  SUBMIT_APPLICATION_MODAL_TOGGLE
} = require('./../../app/constants');

describe('#submitApplication', () => {
  test('it has SUBMIT_APPLICATION type and passed payload', () => {
    const data = Symbol('data');
    const action = submitApplication(data);

    expect(action).toEqual({
      type: SUBMIT_APPLICATION,
      payload: { data }
    });
  });
});

describe('#toggleSubmitApplicationModal', () => {
  test('it has SUBMIT_APPLICATION_MODAL_TOGGLE type with modalState', () => {
    const state = Symbol('state');

    expect(
      toggleSubmitApplicationModal(state)
    ).toEqual({
      type: SUBMIT_APPLICATION_MODAL_TOGGLE,
      payload: {
        modalState: state
      }
    });
  });
});
