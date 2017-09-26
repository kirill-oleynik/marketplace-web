const {
  getSubmitApplicationModalState, getSubmitApplicationErrors
} = require('../../app/selectors/submit_application_selectors');

describe('#getSubmitApplicationModalState', () => {
  test('it returns correct data', () => {
    const state = Symbol('state');

    expect(
      getSubmitApplicationModalState({
        submitApplication: {
          modalIsActive: state
        }
      })
    ).toEqual(state);
  });
});

describe('#getSubmitApplicationErrors', () => {
  test('it returns correct data', () => {
    const errors = Symbol('errors');

    expect(
      getSubmitApplicationErrors({
        submitApplication: {
          errors: errors
        }
      })
    ).toEqual(errors);
  });
});
