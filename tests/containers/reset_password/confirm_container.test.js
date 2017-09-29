const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const ResetPasswordConfirmContainer = require('../../../app/containers/reset_password/confirm_container').default;

const fakeStore = (state = {}) => ({
  subscribe() {},
  dispatch() {},
  getState() { return state; }
});

const resetPassword = {
  errors: {}
}

describe('#render', () => {
  test('it renders correctly', () => {
    const store = fakeStore({
      resetPassword
    });

    const component = shallow(
      <ResetPasswordConfirmContainer
        t={(translate) => translate}
        resetPasswordConfirm={() => {}}
        handleFormCancel={() => {}}
      />,
      { context: { store } }
    )

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
